import React, {useState} from "react";
import AsyncButton from "components/units/AsyncButton/AsyncButton";
import {faEye} from "@fortawesome/free-solid-svg-icons";
// import {Route, Switch} from "react-router-dom";
// import ProtectedRoute from "components/composed/ProtectedRoute";

// // Pages
// import Home from "screens/Home";
// import Page404 from "screens/404";

// // Userflow
// import Login from "screens/UserFlow/Login";
// import Registration from "screens/UserFlow/Registration";
// import RecoverPassword from "screens/UserFlow/RecoverPassword";

// import loquesea from "components/units/AsyncButton";

const App = () => {
	const [animatedState, setAnimatedState] = useState(false);
	const [disabled, setDisabled] = useState(false);
	const handleClick = () => {
		setAnimatedState(true);
		setDisabled(true);
		setTimeout(() => {
			setAnimatedState(false);
			setDisabled(false);
		}, 5000);
	};

	return (
		// <Switch>
		// 	{/* Userflow */}
		// 	<Route exact path="/login" component={Login} />
		// 	<Route exact path="/registration" component={Registration} />
		// 	<Route exact path="/recover-password/:hash" component={RecoverPassword} />

		// 	{/* Caregiver */}
		// 	<ProtectedRoute exact path="/" component={Home} />
		// 	<ProtectedRoute component={Page404} />
		// </Switch>
		// <Notification />
		<AsyncButton
			text="Hola clase"
			icon={faEye}
			iconPosition="left"
			className="success"
			onClick={handleClick}
			animated={animatedState}
			disabled={disabled}
		/>
	);
};

export default App;
