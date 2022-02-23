// custom hook for fetch videos from the database

import { useState, useEffect } from "react";
import { getDatabase, ref, query, orderByKey, get } from "firebase/database";
export default function useVideList() {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		async function fetchVideos() {
			// fetching videos from db
			const db = getDatabase(); // establish the database connection
			const vidoesRef = ref(db, "videos"); // ref(database, table name)
			const videoQuery = query(vidoesRef, orderByKey());
			try {
				setError(false);
				setLoading(true);
				// request firebase database
				const snapshot = await get(videoQuery);
				setLoading(false);
				if (snapshot.exists()) {
					setVideos((prevVideos) => {
						return [
							...prevVideos,
							...Object.values(snapshot.val()),
						];
					});
				} else {
					//
				}
			} catch (err) {
				console.log(err);
				setLoading(false);
				setError(true);
			}
		}
        fetchVideos()
	}, []);

	return {
		loading,
		error,
		videos,
	};
}