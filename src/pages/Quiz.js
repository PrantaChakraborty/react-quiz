import Answers from "../components/Answers";
import ProgressBar from "../components/ProgressBar";
import MiniPlayer from "../components/MiniPlayer";

import { useState, useReducer, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import useQuestions from "../hooks/useQuestions";
import _ from "lodash"; // use to nested obejcts clone
import { useAuth } from "../contexts/AuthContext";
import { getDatabase, set, ref } from "firebase/database";

const initialState = null;

const reducer = (state, action) => {
	switch (action.type) {
		case "questions":
			action.value.forEach((question) => {
				question.options.forEach((option) => {
					option.checked = false;
				});
			});
			return action.value;
		case "answer":
			const questions = _.cloneDeep(state);
			questions[action.questionID].options[action.optionIndex].checked =
				action.value;
			return questions;
		default:
			return state;
	}
};

export default function Quiz() {
	const { id } = useParams();
	const navigate = useNavigate();
	
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const { loading, error, questions } = useQuestions(id);
	const { currentUser } = useAuth();
	const location = useLocation();
	const {state} = location;
	const {videoTitle} = state;
	// making a clone of questions with adding another property ("checked=false")
	/*
	question -> 
				0 ->
					0 -> 
						options -> 
								0 > checked: null, title
	*/
	const [qna, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		dispatch({
			type: "questions",
			value: questions,
		});
	}, [questions]);

	// function for checkbox handle property
	function handleAnswerChange(e, index) {
		dispatch({
			type: "answer",
			questionID: currentQuestion,
			optionIndex: index,
			value: e.target.checked,
		});
	}

	// function for view next questions
	function nextQuestions() {
		console.log("next");
		if (currentQuestion <= questions.length) {
			setCurrentQuestion((prev) => prev + 1);
		}
	}

	// function for view prev questions
	function prevQuestions() {
		if (currentQuestion >= 1 && currentQuestion <= questions.length) {
			setCurrentQuestion((current) => current - 1);
		}
	}

	// for submit answers
	async function submit() {
		const { uid } = currentUser;
		const db = getDatabase();
		const resultRef = ref(db, `result/${uid}`);
		await set(resultRef, {
			[id]: qna,
		});
		// navigate to result page with state
		navigate(`/result/${id}`, {
			state: qna,
		});
	}

	// to calculate percentage
	const percentage =
		questions.length > 0
			? ((currentQuestion + 1) / questions.length) * 100
			: 0;

	return (
		<>
			{loading && <div>Loading...</div>}
			{error && <div>There was an error!</div>}

			{!loading && !error && qna && qna.length > 0 && (
				<>
					<h1>{qna[currentQuestion].title}</h1>
					<h4>Question can have multiple answers</h4>
					<Answers
						options={qna[currentQuestion].options}
						handleChange={handleAnswerChange}
						input={true}
					/>
					<ProgressBar
						next={nextQuestions}
						prev={prevQuestions}
						percentage={percentage}
						submit={submit}
					/>
					<MiniPlayer  id={id} title={videoTitle}/>
				</>
			)}
		</>
	);
}
