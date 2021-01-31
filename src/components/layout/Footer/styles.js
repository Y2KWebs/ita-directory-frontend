import styled from "styled-components";
import Colors from "theme/Colors";

export const StyledFooter = styled.footer`
	@media only screen and (min-width: 1020px) {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 5px 5vh;
		border-top: 2px solid #707070;
		margin-top: 2rem;
	}
	@media only screen and (max-width: 1019px) {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 2px 2vw;
		border-top: 2px solid #707070;
		margin-top: 1rem;
	}
	@media only screen and (max-width: 468px) {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		border-top: 2px solid #707070;
		margin: 1rem;
	}
`;

export const Logo = styled.div`
	@media only screen and (min-width: 1020px) {
		text-align: left;
		font: normal normal normal 16px/16px Korb-Bold;
		letter-spacing: 0px;
		color: ${Colors.black};
		opacity: 1;
		font-weight: bold;
	}
	@media only screen and (max-width: 1019px) {
		text-align: left;
		font: normal normal normal 16px/16px Korb-Bold;
		letter-spacing: 0px;
		color: ${Colors.black};
		opacity: 1;
		font-weight: bold;
		min-width: 10rem;
		flex: 2;
	}
	@media only screen and (max-width: 468px) {
		text-align: center;
		font: normal normal normal 16px/16px Korb-Bold;
		letter-spacing: 0px;
		color: ${Colors.black};
		opacity: 1;
		font-weight: bold;
		padding-left: 25px;
		flex: 4;
	}
`;

export const Information = styled.div`
	@media only screen and (min-width: 1020px) {
		text-align: right;
		font: normal normal normal 14px Helvetica Neue;
		letterspacing: 0;
		color: #4a4a4a;
		opacity: 1;
		list-style-type: none;
	}
	@media only screen and (min-width: 1019px) {
		text-align: right;
		font: normal normal normal 12px Helvetica Neue;
		letterspacing: 0;
		color: #4a4a4a;
		opacity: 1;
		list-style-type: none;
		margin: 0px;
		padding-left: 0;
		min-width: 10rem;
		flex: 2;
	}
	@media only screen and (max-width: 468px) {
		text-align: center;
		font: normal normal normal 12px Helvetica Neue;
		letterspacing: 0;
		color: #4a4a4a;
		opacity: 1;
		list-style-type: none;
		margin-top: 0.5rem;
		padding-left: 0;
		flex: 4;
	}
`;
export const Copyright = styled.div`
	margin: 3px;
`;
export const Rights = styled.div`
	margin: 3px;
`;

export const Legal = styled.div`
	margin: 3px;
`;

export const Anchor = styled.a`
	color: #4a4a4a;
	text-decoration: none;
	list-style-type: none;
	padding: 2px;
	&:hover {
		color: #0578e7;
	}
`;
