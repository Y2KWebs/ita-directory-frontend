import React, {useState} from "react";
import Header from "components/layout/Header/Header";
import {Route, Switch} from "react-router-dom";
// import AsyncButton from "components/units/AsyncButton";
// import {faEye} from "@fortawesome/free-solid-svg-icons";
// import ProtectedRoute from "components/composed/ProtectedRoute";

// Pages
// import Home from "screens/Home";
// import Page404 from "screens/404";

// Userflow
import Login from "screens/UserFlow/Login/Login";
import Registration from "screens/UserFlow/Registration/Registration";
import Profile from "screens/UserFlow/Profile/Profile";
import Footer from "components/layout/Footer/Footer";
// import RecoverPassword from "screens/UserFlow/RecoverPassword";

//Input
// import Input from "components/units/Input/Input";
/* import axios from "axios"; */

const App = () => {
	const [view, setView] = useState("");
	const [token, setToken] = useState();

	const handleLogin = (token) => {
		setToken(token);
		setView("home");
	};
	return (
		<>
			<Header />
			<Switch>
				{/* Userflow */}
				<Route exact path="/login" component={Login} />
				{/* <Route exact path="/login" component={Login}> */}
				{/* <Login onLogin={handleLogin} /> */}
				<Route exact path="/profile" component={Profile} />
				<Route exact path="/registration" component={Registration} />
				{/* <Route exact path="/recover-password/:hash" component={RecoverPassword} /> */}
				{/* Caregiver */}
				{/* <ProtectedRoute exact path="/" component={Home} /> */}
				{/* <ProtectedRoute component={Page404} /> */}
			</Switch>
			<Footer />
		</>
	);
};

export default App;
