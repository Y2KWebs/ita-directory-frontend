import React from "react";
import Header from "components/layout/Header/Header";
import Footer from "components/layout/Footer/Footer";

const Body = ({children, title}) => {
	return (
		<div>
			<Header title={title} />
			{children}
			<Footer />
		</div>
	);
};

export default Body;
