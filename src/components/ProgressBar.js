import Button from "./Button";
import classes from "../styles/ProgressBar.module.css";
import { Link } from "react-router-dom";

export default function ProgressBar({next, prev, percentage}) {
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
				<Button className={`${classes.next}`} onClick={next}>
					<span>Next Question</span>
					<span className="material-icons-outlined">
						arrow_forward
					</span>
				</Button>
			{/* </Link> */}
		</div>
	);
}
