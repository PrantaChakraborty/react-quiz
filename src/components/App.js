import "../styles/styles.css";
import Layout from "./Layout";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Quiz from "../pages/Quiz";
import Results from "../pages/Results";

import { AuthProvider } from "../contexts/AuthContext";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";

function App() {
	return (
		<Router>
			<AuthProvider>
				<Layout>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/signup" element={<Signup />} />
						<Route path="/login" element={<Login />} />
						<Route
							path="/quiz"
							element={
								<PrivateRoute>
									<Quiz />
								</PrivateRoute>
							}
						/>
						<Route
							path="/result"
							element={
								<PrivateRoute>
									<Results />
								</PrivateRoute>
							}
						/>
						<Route
							path="*"
							element={
								<main style={{ padding: "1rem" }}>
									<p>There's nothing here!</p>
								</main>
							}
						/>
					</Routes>
				</Layout>
			</AuthProvider>
		</Router>
	);
}

export default App;
