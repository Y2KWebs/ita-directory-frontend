<<<<<<< HEAD
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
=======
import React, { useState } from 'react'
import Body from 'components/layout/Body/Body'

const Registration = (props) => {
  const [userName, setUsername] = useState('')
  const [email, setEmail] = useState()

  const changeName = () => {
    setUsername('Kevin')
  }
  return (
    <Body>
      <div>Aquí va la info de registrada de:{userName}</div>
    </Body>
  )
}
>>>>>>> 3b2af41ee916790b70698cb5a2fc044dcf15ebc5

export default Registration
