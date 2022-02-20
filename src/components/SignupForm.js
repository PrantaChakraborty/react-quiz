import Form from "../components/Form";
import TextInput from "../components/TextInput";
import Checkbox from "../components/Checkbox";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { useAuth } from "../contexts/AuthContext";

function SignupForm() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [email, setEmail] = useState("");
	const [agree, setAgree] = useState("");
	const [error, setError] = useState();
	const [loading, setLoading] = useState();
	const navigate = useNavigate();

	const { signUp } = useAuth(); // call the context method

	async function handleSubmit(e) {
		e.preventDefault();
		if (password !== confirmPassword) {
			return setError("Password Don't match");
		}
		try {
			setLoading(true);
			setError("");
			await signUp(email, password, username);
			navigate("/"); // return to homepage after success
		} catch (err) {
			console.log(err);
			setLoading(false);
			setError("Unable to signup. Please try again.");
		}
	}
	return (
		<Form style={{ height: "500px" }} onSubmit={handleSubmit}>
			<TextInput
				type="text"
				required
				placeholder="Enter name"
				icon="person"
				value={username}
				onChange={(e) => {
					setUsername(e.target.value);
				}}
			/>
			<TextInput
				type="text"
				required
				placeholder="Enter email"
				icon="alternate_email"
				value={email}
				onChange={(e) => {
					setEmail(e.target.value);
				}}
			/>
			<TextInput
				type="password"
				required
				placeholder="Enter password"
				icon="lock"
				value={password}
				onChange={(e) => {
					setPassword(e.target.value);
				}}
			/>
			<TextInput
				type="password"
				required
				placeholder="Confirm password"
				icon="lock_clock"
				value={confirmPassword}
				onChange={(e) => {
					setConfirmPassword(e.target.value);
				}}
			/>
			<Checkbox
				required
				text="I agree to the Terms & Conditions"
				value={agree}
				onChange={(e) => {
					setAgree(e.target.value);
				}}
			/>
			<Button disabled={loading} type="submit">
				<span>Submit now</span>
			</Button>
			{error && <p className="error">{error}</p>}
			<div className="info">
				Already have an account? <Link to="/login">Login</Link>
				instead.
			</div>
		</Form>
	);
}

export default SignupForm;
