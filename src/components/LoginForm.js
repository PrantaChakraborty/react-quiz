import Form from "../components/Form";
import TextInput from "../components/TextInput";
import Button from "../components/Button";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { useAuth } from "../contexts/AuthContext";

export default function LoginForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [loading, setLoading] = useState();
	const [error, setError] = useState();
	const { login } = useAuth();
	const navigate = useNavigate();

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			setLoading(true);
			setError("");
			await login(email, password);
			navigate("/"); // return to home page after successfull login
		} catch (error) {
			console.log(error);
			setLoading(false);
			setError("Unable to login. Credentials are not corrent");
		}
	}
	return (
		<Form style={{height:"330px"}} onSubmit={handleSubmit}>
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
				required
				type="text"
				placeholder="Enter password"
				icon="lock"
				value={password}
				onChange={(e) => {
					setPassword(e.target.value);
				}}
			/>
			<Button type="submit" disabled={loading}>
				<span>Submit now</span>
			</Button>
			{error && <p className="error">{error}</p>}
			<div className="info">
				Don't have an account? <Link to="/signup">Signup </Link>
				instead.
			</div>
		</Form>
	);
}
