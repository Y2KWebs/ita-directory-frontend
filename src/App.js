<<<<<<< HEAD
import React, {useState} from "react";
import Header from "components/layout/Header/Header";
import {Route, Switch} from "react-router-dom";
// import AsyncButton from "components/units/AsyncButton";
// import {faEye} from "@fortawesome/free-solid-svg-icons";
=======
import React, { useState } from 'react'
import Header from 'components/layout/Header/Header'
// import AsyncButton from "components/units/AsyncButton";
// import {faEye} from "@fortawesome/free-solid-svg-icons";
import { Route, Switch } from 'react-router-dom'
>>>>>>> 3b2af41ee916790b70698cb5a2fc044dcf15ebc5
// import ProtectedRoute from "components/composed/ProtectedRoute";

// Pages
// import Home from "screens/Home";
// import Page404 from "screens/404";

// Userflow
<<<<<<< HEAD
import Login from "screens/UserFlow/Login/Login";
import Registration from "screens/UserFlow/Registration/Registration";
import Profile from "screens/UserFlow/Profile/Profile";
import Footer from "components/layout/Footer/Footer";
=======
import Login from 'screens/UserFlow/Login/Login'
import Registration from 'screens/UserFlow/Registration/Registration'
import Footer from 'components/layout/Footer/Footer'
>>>>>>> 3b2af41ee916790b70698cb5a2fc044dcf15ebc5
// import RecoverPassword from "screens/UserFlow/RecoverPassword";

// Input
// import Input from "components/units/Input/Input";
/* import axios from "axios"; */

const App = () => {
<<<<<<< HEAD
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
=======
  const [view, setView] = useState('')
  const [token, setToken] = useState()

  const handleLogin = (token) => {
    setToken(token)
    setView('home')
  }
  return (
    <>
      <Switch>
				Userflow
        <Route exact path='/login' component={Login}>
          <Login onLogin={handleLogin} />
        </Route>
        <Route exact path='/registration' component={Registration} />
        {/* <Route exact path="/recover-password/:hash" component={RecoverPassword} /> */}
        {/* Caregiver */}
        {/* <ProtectedRoute exact path="/" component={Home} /> */}
        {/* <ProtectedRoute component={Page404} /> */}
      </Switch>
    </>
  )
}
>>>>>>> 3b2af41ee916790b70698cb5a2fc044dcf15ebc5

export default App
