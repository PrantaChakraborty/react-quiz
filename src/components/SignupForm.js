import Form from "../components/Form";
import TextInput from "../components/TextInput";
import Checkbox from "../components/Checkbox";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function SignupForm() {
	return (
		<Form style={{ height: "500px" }}>
			<TextInput type="text" placeholder="Enter name" icon="person" />
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
			<Button>
				<span>Submit now</span>
			</Button>
			<div className="info">
				Already have an account? <Link to="/login">Login</Link>
				instead.
			</div>
		</Form>
	);
}

export default SignupForm;
