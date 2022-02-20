import React from "react";
import Illustration from "../components/Illustration";
import SignupImage from "../assets/images/signup.svg";

import SignupForm from "../components/SignupForm";

function Signup() {
	return (
		<>
			<h1>Create an account</h1>
			<div className="column">
				<Illustration image={SignupImage} alt_text="Signup" />
				<SignupForm />
			</div>
		</>
	);
}

export default Signup;
