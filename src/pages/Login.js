import Illustration from "../components/Illustration";
import Form from "../components/Form";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import classes from "../styles/Login.module.css";

import LoginImage from "../assets/images/login.svg";

export default function Login() {
	return (
		<>
			<h1>Login to your account</h1>

			<div className="column">
				<Illustration image={LoginImage} alt_text="Login" />
				<Form className={`${classes.login}`}>
					<TextInput
						type="text"
						placeholder="Enter email"
						icon="alternate_email"
					/>
					<TextInput
						type="text"
						placeholder="Enter password"
						icon="lock"
					/>
					<Button text="Submit now" />
					<div className="info">
						Don't have an account? <a href="signup.html">Signup</a>{" "}
						instead.
					</div>
				</Form>
			</div>
		</>
	);
}
