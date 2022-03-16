import { useState, useEffect } from "react";

export default function useFetch(url, method, headers) {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [data, setData] = useState(null);

	useEffect(() => {
		async function fetchImage() {
			try {
				setLoading(true);
				setError(false);
				const response = await fetch(url, {
					method: method || "GET",
					headers: headers,
				});
				const data = await response.json();
				setLoading(false);
				setData(data);
			} catch (err) {
				console.log(err);
				setLoading(false);
				setError(true);
			}
		}
		fetchImage();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return {
		loading,
		error,
		data,
	};
}
