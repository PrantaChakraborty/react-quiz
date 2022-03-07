import Button from "./Button";
import classes from "../styles/ProgressBar.module.css";

export default function ProgressBar({ next, prev, percentage, submit }) {
	return (
		<div className={classes.progressBar}>
			<div className={classes.backButton} onClick={prev}>
				<span className="material-icons-outlined"> arrow_back </span>
			</div>
			<div className={classes.rangeArea}>
				<div className={classes.tooltip}>{percentage}% Complete!</div>
				<div className={classes.rangeBody}>
					<div
						className={classes.progress}
						style={{ width: `${percentage}%` }}
					></div>
				</div>
			</div>
			{/* <Link> */}
			<Button
				className={`${classes.next}`}
				onClick={percentage === 100 ? submit : next}
			>
				<span>{percentage === 100 ? "Submit" : "Next Question"}</span>
				<span className="material-icons-outlined">arrow_forward</span>
			</Button>
			{/* </Link> */}
		</div>
	);
}
