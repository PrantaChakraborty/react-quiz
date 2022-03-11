import classes from "../styles/Summary.module.css";
import image from '../assets/images/success.png'

export default function Summary({result, noq}) {
	return (
		<div className={classes.summary}>
			<div className={classes.point}>
				<p className={classes.score}>
					Your score is <br />{result} out of {noq * 5}
				</p>
			</div>

			<div className={classes.badge}>
				<img src={image} alt="Success" />
			</div>
		</div>
	);
}
