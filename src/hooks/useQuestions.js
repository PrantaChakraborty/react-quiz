// custom hook for fetch videos from the database

import { useState, useEffect } from "react";
import { getDatabase, ref, query, orderByKey, get } from "firebase/database";

export default function useQuestions(videoID) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [questions, setQuestions] = useState([]);

	useEffect(() => {
		async function fetchVideos() {
			// fetching videos from db
			const db = getDatabase(); // establish the database connection
			const questionsRef = ref(db, "quiz/" + videoID + "/questions"); // ref(database, table name)
			// will show first 6 videos
			const questionsQuery = query(questionsRef, orderByKey());
			try {
				setError(false);
				setLoading(true);
				// request firebase database
				const snapshot = await get(questionsQuery);
				setLoading(false);
				if (snapshot.exists()) {
					setQuestions((prevVideos) => {
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
		fetchVideos();
	}, [videoID]);

	return {
		loading,
		error,
		questions,
	};
}
