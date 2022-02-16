import classes from "../styles/Illustration.module.css";
function Illustration({image, alt_text}) {
	return (
		<div className={classes.illustration}>
			<img src={image} alt={alt_text} />
		</div>
	);
}

export default Illustration;
