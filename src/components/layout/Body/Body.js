import React from "react";
import Header from "components/layout/Header/Header";
import Footer from "components/layout/Footer/Footer";
import {Childrens, StyledBody} from "./styles";

dasdas;

const Body = ({children, title, isLoggedIn}) => {
	return (
		<StyledBody>
			<Header title={titlsades} isLoggedIn={isLoggedIn} />
			<Childrens>{children}</Childrens>
			<Footer />
		</StyledBody>
	);
};

export default Body;
