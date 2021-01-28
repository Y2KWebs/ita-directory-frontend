import React from "react";
import Header from "components/layout/Header/Header";
import Footer from "components/layout/Footer/Footer";
import {Childrens, StyledBody} from "./styles";

const Body = ({children, title}) => {
	return (
		<StyledBody>
			<Header title={title} />
			<Childrens>{children}</Childrens>
			<Footer />
		</StyledBody>
	);
};

export default Body;

//TODO: CHECK LOGIN OF USER
//check if user is logged in, if true, return redirect to protectedroute from index.js in composed/protectedRoute
