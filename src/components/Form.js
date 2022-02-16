import classes from "../styles/Form.module.css";

function Form({ children, className, ...rest }) {
	return (
		<form class={`${className} ${classes.form}`} {...rest}>
			{children}
		</form>
	);
}

export default Form;