// custom hook for fetch answers from the database

import { useState, useEffect } from "react";
import { getDatabase, ref, query, orderByKey, get } from "firebase/database";

export default function useAnswers(videoID) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [answers, setAnswers] = useState([]);

	useEffect(() => {
		async function fetchAnswers() {
			// fetching videos from db
			const db = getDatabase(); // establish the database connection
			const answerRef = ref(db, "answers/" + videoID + "/questions"); // ref(database, table name)
			// will show first 6 videos
			const answerQuery = query(answerRef, orderByKey());
			try {
				setError(false);
				setLoading(true);
				// request firebase database
				const snapshot = await get(answerQuery);
				setLoading(false);
				if (snapshot.exists()) {
					setAnswers((prevVideos) => {
						return [
							...prevVideos,
							...Object.values(snapshot.val()),
						];
					});
				}
			} catch (err) {
				console.log(err);
				setLoading(false);
				setError(true);
			}
		}
		fetchAnswers();
	}, [videoID]);

	return {
		loading,
		error,
		answers,
	};
}
