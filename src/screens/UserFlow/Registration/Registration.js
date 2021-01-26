import React, {useState} from "react";
import Body from "components/layout/Body/Body";
// import {StyledForm} from "./styles";

const Registration = (props) => {
	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");

	const changeName = () => {
		setUserName("Kevin");
	};
	return (
		<Body>
			<div>Aquí va la info de registrada de:{userName}</div>;
		</Body>
	);
};

export default Registration;
