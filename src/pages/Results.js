import Summary from "../components/Summary";
import Analysis from "../components/Analysis";
import { useLocation, useParams } from "react-router-dom";
import useAnswers from "../hooks/useAnswers";
import _ from "lodash";

export default function Results() {
	const { id } = useParams();
	const location = useLocation();
	const qna = location.state;
	const { loading, error, answers } = useAnswers(id);

	function calculateAnswer() {
		let score = 0;
		answers.forEach((question, index1) => {
			let correctIndices = [];
			let checkedIndices = [];
			question.options.forEach((option, index2) => {
				if (option.correct) {
					correctIndices.push(index2);
				}
				if (qna[index1].options[index2].checked) {
					checkedIndices.push(index2);
					option.checked = true;
				}
			});
			if (_.isEqual(correctIndices, checkedIndices)) {
				score = score + 5;
			}
		});
		return score
	}

	const userResult = calculateAnswer();

	return (
		<>
			{loading && <div>Loading...</div>}
			{error && <div>Error</div>}
			{answers && answers.length > 0 && (
				<>
					<Summary result={userResult} noq={answers.length}/>
					<Analysis answers={answers}/>
				</>
			)}
		</>
	);
}
