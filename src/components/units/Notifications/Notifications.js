import React, {useState} from "react";
import PropTypes from "prop-types";

// Styles
import {NotificationWrapper, NotificationMessage} from "./styles";

// icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamationCircle} from "@fortawesome/free-solid-svg-icons";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";

// submitForm si ha enviado el formulario (true or false)
// isAuthenticated si esta autenticado o ha habido error (true or false)
// nombreUsuario recupera del backend el nombre del user cuando isAuthenticated solo si es true

export const Notifications = ({notification, className, user, text, icon, time}) => {
	// Valores como prueba
	// authenticated = true;
	// user = "Kevin";

	// const [notification, setNotification] = useState(false);

	// metodo que lanza la notificacion
	// const dispatchNotification = () => {
	// 	setNotification(true);
	// 	setTimeout(() => {
	// 		setNotification(false);
	// 	}, time * 1000);
	// };

	return (
		<>
			<NotificationWrapper
				notification={notification}
				className={`${className} ${notification ? "success" : "error"}`}
			>
				<FontAwesomeIcon
					icon={notification ? faCheckCircle : faExclamationCircle}
					style={{
						top: "48px",
						left: "949px",
						width: "30px",
						height: "30px",
						color: "#ffffff",
						opacity: "1",
					}}
				/>
				<NotificationMessage>
					{notification
						? `Bienvenido de nuevo ${user}. Te estamos redireccionando.`
						: `Ha habido un error con tu usuario o contraseña. Introducelos de nuevo.`}
				</NotificationMessage>
			</NotificationWrapper>
			)
		</>
	);

	Notifications.propTypes = {
		notification: PropTypes.bool.isRequired,
		className: PropTypes.string,
		user: PropTypes.string,
	};
};
