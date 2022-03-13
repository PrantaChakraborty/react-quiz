import Button from "./Button";
import classes from "../styles/ProgressBar.module.css";
import { useState, useRef } from "react";

export default function ProgressBar({ next, prev, percentage, submit }) {
	const [tooltip, setTooltip] = useState(false);
	const tooltipRef = useRef();

	function toggleTooltip() {
		if (tooltip) {
			setTooltip(false);
			tooltipRef.current.style.display = "none";
		} else {
			setTooltip(true);
			tooltipRef.current.style.left = `calc(${percentage}% - 65px)`;
			tooltipRef.current.style.display = "block";
		}
	}
	return (
		<div className={classes.progressBar}>
			<div className={classes.backButton} onClick={prev}>
				<span className="material-icons-outlined"> arrow_back </span>
			</div>
			<div className={classes.rangeArea}>
				<div className={classes.tooltip} ref={tooltipRef}>
					{percentage}% Complete!
				</div>
				<div className={classes.rangeBody}>
					<div
						className={classes.progress}
						style={{ width: `${percentage}%` }}
						onMouseOver={toggleTooltip}
						onMouseOut={toggleTooltip}
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
