import classes from "../styles/Summary.module.css";
import Successimage from "../assets/images/success.png";
import useFetch from "../hooks/useFetch";
import { useMemo } from "react";

export default function Summary({ result, noq }) {
	const getKeyword = () => {
		var score = (result / (noq * 5)) * 100;
		if (score < 50) {
			return "failed";
		} else if (score < 75) {
			return "good";
		} else if (score < 100) {
			return "good";
		} else {
			return "excellent";
		}
	}

	const { loading, error, data } = useFetch(
		`https://api.pexels.com/v1/search?query=${getKeyword()}&per_page=1`,
		"GET",
		{
			Authorization: process.env.REACT_APP_PEXELS_API_KEY,
		}
	);
	// console.log(data.photos[0]);
	const image = data ? data?.photos[0].src.medium : Successimage;
	return (
		<div className={classes.summary}>
			<div className={classes.point}>
				<p className={classes.score}>
					Your score is <br />
					{result} out of {noq * 5}
				</p>
			</div>
			{loading && <div className={classes.badge}>loading ...</div>}
			{error && <div className={classes.badge}>An error occured ...</div>}

			{!loading && !error && (
				<div className={classes.badge}>
					<img src={image} alt="Success" />
				</div>
			)}
		</div>
	);
}
