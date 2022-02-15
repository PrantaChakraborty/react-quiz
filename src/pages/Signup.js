import React from "react";
import Illustration from "../components/Illustration";
import Form from "../components/Form";
import TextInput from "../components/TextInput";
import Checkbox from "../components/Checkbox";
import Button from "../components/Button";
import classes from "../styles/Signup.module.css";

function Signup() {
	return (
		<>
			<h1>Create an account</h1>
			<div class="column">
				<Illustration />
				<Form className={`${classes.signup}`}>
					<TextInput
						type="text"
						placeholder="Enter name"
						icon="person"
					/>
					<TextInput
						type="text"
						placeholder="Enter email"
						icon="alternate_email"
					/>
					<TextInput
						type="password"
						placeholder="Enter password"
						icon="lock"
					/>
					<TextInput
						type="password"
						placeholder="Confirm password"
						icon="lock_clock"
					/>
					<Checkbox text="I agree to the Terms & Conditions" />
					<Button text="Submit now" />
					<div className="info">
						Already have an account? <a href="login.html">Login</a>{" "}
						instead.
					</div>
				</Form>
			</div>
		</>
	);
}

export default Signup;
