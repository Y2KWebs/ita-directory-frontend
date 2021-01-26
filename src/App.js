import React from "react";
import {Route, Switch} from "react-router-dom";
import ProtectedRoute from "components/composed/ProtectedRoute";

// import AsyncButton from "components/units/AsyncButton";
// import {faEye} from "@fortawesome/free-solid-svg-icons";

// Pages
// import Home from "screens/Home";
// import Page404 from "screens/404";

// Userflow
import Login from "screens/UserFlow/Login/Login";
import Registration from "screens/UserFlow/Registration/Registration";
// import RecoverPassword from "screens/UserFlow/RecoverPassword";

//Input
import Input from "components/units/Input/Input";
/* import axios from "axios"; */
// import Login from "screens/UserFlow/Login/Login";

const App = () => {
	return (
		// <>
		// 	<Login />
		// </>
		<Switch>
			{/* Userflow */}
			<Route exact path="/login" component={Login} /> */}
			<Route exact path="/registration" component={Registration} />
			{/* <Route exact path="/recover-password/:hash" component={RecoverPassword} /> */}
			{/* Rutas privadas */}
			{/* <ProtectedRoute exact path="/" component={Home} /> */}
			{/* <ProtectedRoute component={Page404} /> */}
		</Switch>
	);
};

export default App;

/* const handleDisabled = async () => {
        //Mi Funcion puede ser set time out, axios, fetch o try and catch
	 setIsDisabled(true)
		try{
			await axios.get("mi-url", {params: {hola: "adios"}})
			setIsDisabled(false)
		} catch (error) {
			setIsDisabled(false)
			console.log(error)
		} */
