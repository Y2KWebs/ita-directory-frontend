import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Input from "components/units/Input/Input";
import AsyncButton from "components/units/AsyncButton/AsyncButton";
import {StyleRedirect, StyledError, StyledForm} from "./styles";
import {Notifications} from "components/units/Notifications/Notifications";

import Body from "components/layout/Body/Body";

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^(?=.*?[A-Z]).{6,}$/;

const validateEmail = (email) => EMAIL_REGEX.test(email.toLowerCase());
const validatePassword = (password) => PASSWORD_REGEX.test(password);

const users = [
	{
		email: "m@m.com",
		password: "123456",
	},
];

const Login = (onLogin, onGoToRegister, authenticated) => {
	// const [error, setError] = useState("");
	// const [view, setView] = useState("");
	const [animatedState, setAnimatedState] = useState(false);
	const [disabled, setIsDisabled] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [notification, setNotificationvalue] = useState(authenticated);
	useEffect(() => {
		console.log(notification);
	}, [notification]);

	const authenticateUser = (email, password) => {
		let authenticated = false;
		for (let i = 0; i < users.length; i++) {
			const user = users[i];
			if (user.email === email && user.password === password) {
				authenticated = true;
			}
		}
		authenticated
			? console.log("the user is correct", authenticated)
			: console.error("the user is incorrect", authenticated);

		return authenticated;
	};

	// value - handleChange
	const [isEmailError, setIsEmailError] = useState(false);
	const [isPassError, setIsPassError] = useState();

	const handleEmailChange = (value) => {
		setEmail(value);
		const isEmail = validateEmail(value);
		setIsEmailError(!isEmail);
	};

	const handlePasswordChange = (value) => {
		setPassword(value);
		const isPass = validatePassword(value);
		setIsPassError(!isPass);
	};

	// const handleFocus = () => {
	// 	console.log("He pinchado dentro");
	// };

	// const handleBlur = () => {
	// 	console.log("He pinchado fuera");
	// };

	// DATOS FORMULARIO
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();

		// authenticateUser(email, password);
		setNotificationvalue(authenticateUser(email, password));
		console.log(notification);
	};

	return (
		<Body title="Acceso">
			<StyledForm onSubmit={handleSubmit}>
				<Input
					type="email"
					placeholder="email@mail.com"
					value={email}
					onChange={(e) => handleEmailChange(e.target.value)}
					id="emailName"
					name="emailName"
					error={isEmailError}
					disabled={disabled}
				/>
				<Input
					type="password"
					placeholder="Introduce tu contraseña"
					value={password}
					onChange={(e) => handlePasswordChange(e.target.value)}
					id="passName"
					name="passName"
					error={isPassError}
					disabled={disabled}
					minLength={6}
				/>
				<AsyncButton
					text="Acceder"
					loadingText="Accediendo"
					iconPosition="left"
					type="submit"
					className="blueGradient"
					textStyles={{marginLeft: 10}}
					// onClick={handleClick}
					isLoading={isLoading}
					animated={animatedState}
					disabled={disabled}
				/>
				<StyleRedirect>
					No tienes cuenta? <Link to="/register"> Registrate</Link>
				</StyleRedirect>
				{/* <button onClick={() => setNotificationvalue(true)}>Show Success</button>
				<button onClick={() => setNotificationvalue(false)}>Show Alert</button>
				<button onClick={() => setNotificationvalue()}>Hide</button> */}
				{authenticated && <Notifications notification={notification}></Notifications>}
			</StyledForm>
		</Body>
	);
};

export default Login;
