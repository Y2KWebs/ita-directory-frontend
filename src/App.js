import React, {useState} from "react";
import {Route, Switch} from "react-router-dom";
import ProtectedRoute from "components/composed/ProtectedRoute";
// import {faEye} from "@fortawesome/free-solid-svg-icons";
// COMENTARIOS
// 1. MOVER HANDLE LOGIN A LA RUTA
// 2. EN LOGIN MOSTRAR MENSJAES DE VALIDACIÓN MIENTRAS SE VALIDA (EMAIL Y PASSWORD)
// 3. EN LOGIN AÑADIR ENLACE A REGISTRATE AQUÍ DEBAJO DE BOTÓN ACCEDER
// 3.1 MODIFICAR HEADER Y DEJAR EL TÍTULO
// 4. FORMULARIO CENTRADO
// 5. VERSIÓN MÓVIL USAR MEDIAQUERIES EN EL FOOTER
// 6. PONER TOKEN EN LOCALSTORAGE CON KEY itacademy.

// Content
import Home from "screens/Home/Home";

// Userflow
import Login from 'screens/UserFlow/Login/Login'
import Registration from "screens/UserFlow/Registration/Registration";
import Profile from "screens/UserFlow/Profile/Profile";
// import RecoverPassword from "screens/UserFlow/RecoverPassword";

const App = () => {
	const [view, setView] = useState("");
	const [token, setToken] = useState();

	const handleLogin = (token) => {
		setToken(token);
		setView("home");
	};
  
	return (
		<>
			<Switch>
				<ProtectedRoute exact path="/" component={Home} />

				<Route exact path="/login" component={Login}>
					<Login onLogin={handleLogin} />
				</Route>
				<Route exact path="/register" component={Registration} />
				{/* <Route exact path="/profile" component={Profile} /> */}
				{/* <Route exact path="/recover-password/:hash" component={RecoverPassword} /> */}

				{/* <ProtectedRoute component={Page404} /> */}
			</Switch>
		</>
	);
};

export default App;
