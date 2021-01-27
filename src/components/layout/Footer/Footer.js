<<<<<<< HEAD
import React from "react";
import {
	Anchor,
	Copyright,
	Rights,
	Information,
	Legal,
	Logo,
	LogoText,
	StyledFooter,
} from "./styles";

const Footer = () => {
	return (
		<StyledFooter>
			<hr />
			<Logo>
				<LogoText>LOGO EMPRESA </LogoText>
			</Logo>
			<Information>
				<Copyright> ©miempresa.com </Copyright>
				<Rights> Todos los derechos reservados.</Rights>
				<Legal>
					<Anchor href="https://www.google.com/">Aviso Legal</Anchor>
					<Anchor href="https://www.google.com/">Privacidad</Anchor>
					<Anchor href="https://www.google.com/"> Cookies</Anchor>
				</Legal>
			</Information>
		</StyledFooter>
	);
};
=======
import React from 'react'
import { Anchor, Copyright, Rights, Information, Legal, Logo, LogoText, StyledFooter } from './styles'

const Footer = () => {
  return (
    <StyledFooter>
      <Logo>
        <LogoText>LOGO EMPRESA </LogoText>
      </Logo>
      <Information>
        <Copyright> ©miempresa.com </Copyright>
        <Rights> Todos los derechos reservados.</Rights>
        <Legal>
          <Anchor href='https://www.google.com/'>Aviso Legal</Anchor>
          <Anchor href='https://www.google.com/'>Privacidad</Anchor>
          <Anchor href='https://www.google.com/'> Cookies</Anchor>
        </Legal>
      </Information>
    </StyledFooter>
  )
}
>>>>>>> 3b2af41ee916790b70698cb5a2fc044dcf15ebc5

export default Footer
