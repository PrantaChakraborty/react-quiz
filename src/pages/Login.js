import Illustration from "../components/Illustration";
import LoginForm from "../components/LoginForm";
import LoginImage from "../assets/images/login.svg";
export default function Login() {
	return (
		<>
			<h1>Login to your account</h1>

			<div className="column">
				<Illustration image={LoginImage} alt_text="Login" />
				<LoginForm />
			</div>
		</>
	);
}
