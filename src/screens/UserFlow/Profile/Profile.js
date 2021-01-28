import React from "react";
import Body from "components/layout/Body/Body";

const Profile = () => {
	// const authenticateProfile = (email, password) => {
	// 	if (users.email === email && users.password === password)
	// 		console.log("this profile is correct");
	// 	else console.log("the profile is incorrect");
	// };

	return (
		<Body title="Editar Perfil">
			<StyledForm onSubmit={handleSubmit}>
				{/* HERE PICTURE, PROFILE, BUTTON */}
				<Img></Img>
				<h3>Fotografía de perfil</h3>
				<p text={"Súbe tu fotografía de perfil, tamaño recomendado 1000x1000"}></p>
				<AsyncButton
					text="Subir"
					loadingText="Subiendo"
					iconPosition="center"
					type="submit"
					className="greenGradient"
					textStyles={{marginLeft: 10}}
					onClick={handleClick}
					isLoading={isLoading}
					animated={animatedState}
					disabled={disabled}
				/>
				<hr></hr>
				{/* HERE USERNAME, EMAIL, PASSWORD, REPEAT PASSWORD, BUTTON */}
				<Label> Nombre de usuario</Label>
				<Input
					type="text"
					placeholder="ramiro192"
					value={state.user}
					onChange={handleInputOnChange}
					onFocus={handleFocus}
					onBlur={handleBlur}
					id="userName"
					name="userName"
					error={"El nombre de usuario no se puede cambiar"}
					disabled={disabled}
				/>
				<Label>Email</Label>
				<Input
					type="email"
					placeholder="email@mail.com"
					value={state.email}
					onChange={handleInputOnChange}
					onFocus={handleFocus}
					onBlur={handleBlur}
					id="emailName"
					name="emailName"
					error={
						"El email no se puede cambiar. Ponte en contacto si necesitas actualizarlo"
					}
					disabled={disabled}
				/>
				<Label>Nueva contraseña</Label>
				<Input
					type="password"
					placeholder="Introduce tu contraseña"
					value={state.password}
					onChange={handleInputPassOnChange}
					onFocus={handleFocus}
					onBlur={handleBlur}
					id="passName"
					name="passName"
					error={""}
					disabled={disabled}
					minLength={6}
				/>
				<Label>Comfirmar contraseña</Label>
				<Input
					type="password"
					placeholder="Confirma tu contraseña"
					value={state.password}
					onChange={handleInputPassOnChange}
					onFocus={handleFocus}
					onBlur={handleBlur}
					id="passName"
					name="passName"
					error={""}
					disabled={disabled}
					minLength={6}
				/>
				{error && (
					<StyledError>
						<p>{error}</p>
					</StyledError>
				)}
				<AsyncButton
					text="Guardar"
					loadingText="Guardando"
					iconPosition="left"
					type="submit"
					className="blueGradient"
					textStyles={{marginLeft: 10}}
					onClick={handleClick}
					isLoading={isLoading}
					animated={animatedState}
					disabled={disabled}
				/>
				<StyleRedirect>
					No tienes perfil? <Link to="/register"> Registrate</Link>
				</StyleRedirect>
			</StyledForm>
		</Body>
	);
};

export default Profile;