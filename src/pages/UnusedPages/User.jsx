// import "../styles/User.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";

import Login from "../user/SignIn";
import SignUp from "../user/SignUp";
import Profile from "../user/Profile";

const User = (props) => {
	const { setCurrentView } = props;

	const [loginView, setLoginView] = useState("");

	useEffect(() => {
		if (!localStorage.getItem("user")) {
			setLoginView("login");
		} else {
			setLoginView("profile");
		}
	}, []);

	return (
		<>
			{loginView === "login" && (
				<Login setLoginView={setLoginView} setCurrentView={setCurrentView} />
			)}

			{loginView === "registration" && <SignUp setLoginView={setLoginView} />}

			{loginView === "profile" && (
				<Profile setLoginView={setLoginView} setCurrentView={setCurrentView} />
			)}
		</>
	);
};

export default User;