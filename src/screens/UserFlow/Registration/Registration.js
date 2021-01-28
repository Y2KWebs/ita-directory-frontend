import React, {useState} from "react";
import Input from "components/units/Input/Input";
import AsyncButton from "components/units/AsyncButton/AsyncButton";
import {StyledError, StyledRegister} from "./styles";
import Body from "components/layout/Body/Body";

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^(?=.*?[A-Z]).{6,}$/;

const validateEmail = (email) => EMAIL_REGEX.test(email.toLowerCase());
const validatePassword = (password) => PASSWORD_REGEX.test(password);

const users = [
	{
		email: "",
		password: "",
	},
];

const authenticateUser = (email, password) => {
	if (users.email === email && users.password === password)
		console.log("this user already exists");
	else console.log("new user registered");
};

const initialState = {email: "", password: ""};

const Register = (props) => {
	const [userName, setUsername] = useState("");
	const [email, setEmail] = useState();
	const [error, setError] = useState("");
	const [animatedState, setAnimatedState] = useState(false);
	const [disabled, setIsDisabled] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const changeName = () => {
		setUsername("Kevin");
	};

	const handleClick = () => {
		setAnimatedState(true);
		setIsDisabled(true);
		setIsLoading(true);
		setTimeout(() => {
			setAnimatedState(false);
			setIsDisabled(false);
			setIsLoading(false);
		}, 5000);
	};

	// value - handleChange
	const [isEmailError, setIsEmailError] = useState(false);
	const [isPassError, setIsPassError] = useState(false);

	const handleInputOnChange = (e) => {
		const val = e.target.value;
		const isEmail = validateEmail(val);
		setState(val);
		setIsEmailError(!isEmail);
	};

	const handleInputPassOnChange = (e) => {
		const valPass = e.target.value;
		const isPass = validatePassword(valPass);
		setState(valPass);
		setIsPassError(!isPass);
	};

	const handleFocus = () => {
		console.log("He pinchado dentro");
	};

	const handleBlur = () => {
		console.log("He pinchado fuera");
	};

	//REVISAR HANDLE SUBMIT
	const handleSubmit = async (event) => {
		event.preventDefault();

		let {email, password} = event.target.value;

		email = email.value;
		password = password.value;

		const token = await authenticateUser({email, password, error});
		{
			if (error) return setError(error.message);
		}
		localStorage.setItem("ItAcademy", token); //DUDA
	};

	return (
		<Body>
			<StyledRegister onSubmit={handleSubmit}>
				<Input
					type="email"
					placeholder="Email"
					value={state.email}
					onChange={handleInputOnChange}
					onFocus={handleFocus}
					onBlur={handleBlur}
					id="emailName"
					name="emailName"
					error={isEmailError}
					disabled={disabled}
				/>
				<Input
					type="password"
					placeholder="Contraseña"
					value={state.password}
					onChange={handleInputPassOnChange}
					onFocus={handleFocus}
					onBlur={handleBlur}
					id="passName"
					name="passName"
					error={isPassError}
					disabled={disabled}
				/>
				{error && (
					<StyledError>
						<p>{error}</p>
					</StyledError>
				)}
				<AsyncButton
					text="Registrame"
					loadingText="Registrando"
					iconPosition="left"
					type="submit"
					className="orangeGradient"
					textStyles={{marginLeft: 10}}
					onClick={handleClick}
					isLoading={isLoading}
					animated={animatedState}
					disabled={disabled}
				/>
			</StyledRegister>
		</Body>
	);
};

export default Register;
