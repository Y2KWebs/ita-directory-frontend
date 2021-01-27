<<<<<<< HEAD
import React from "react";
import {Logo, Routes, StyledHeader} from "./styles";
import {Link} from "react-router-dom";

const Header = ({title}) => {
	// const path = props.location.pathname.slice(1);
	// const path = props.location.name;
	return (
		<div>
			<Logo> Mi Empresa</Logo>
			<StyledHeader>
				<Routes>
					<Link to="/login">Login</Link>
					<Link to="/registration">Registration</Link>
					{/* <h1>{path}</h1> */}
				</Routes>
			</StyledHeader>
		</div>
	);
};

export default Header;
=======
import React from 'react'
import { Logo, Routes, StyledHeader } from './styles'
import { Link } from 'react-router-dom'

const Header = ({ title }) => {
  return (
    <div>
      <Logo> Mi Empresa</Logo>
      <StyledHeader>
        <Routes>
          <Link to='/login'>Login</Link>
          <Link to='/registration'>Registration</Link>
          <h1>{title}</h1>
        </Routes>
      </StyledHeader>
    </div>
  )
}

export default Header
>>>>>>> 3b2af41ee916790b70698cb5a2fc044dcf15ebc5
