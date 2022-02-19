import React, { useContext, useEffect, useState } from "react";
import "../components/firebase";
import {
	getAuth,
	createUserWithEmailAndPassword,
	updateCurrentUser,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [loading, setLoading] = useState(true);
	const [currentUser, setCurrentUser] = useState();

    // for updating the state, after login/logout/signup
	useEffect(() => {
		const auth = getAuth();
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user);
			setLoading(false);
		});
		return unsubscribe;
	}, []);

	// signup user
	async function signUp(email, password, username) {
		const auth = getAuth();
		await createUserWithEmailAndPassword(auth, email, password);

		// update profile
		await updateCurrentUser(auth.currentUser, {
			displayName: username,
		});

		// set the user state
		const user = auth.currentUser;
		setCurrentUser({
			...user,
		});
	}

	// signin user
	function login(email, password) {
		const auth = getAuth();
		return signInWithEmailAndPassword(auth, email, password);
	}

	// logout user
	function logout() {
		const auth = getAuth();
		return signOut(auth);
	}

	const value = {
		currentUser,
		signUp,
		login,
		logout,
	};

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
}
