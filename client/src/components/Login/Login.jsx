import React from "react";
import axios from 'axios';
import loginImg from "./login.svg";
import "./styles.scss";
import validate from "./validateInfo";
import LoginForm from "./loginform";
import GoogleLogin from "react-google-login";
import { useHistory } from "react-router-dom";
import LoginGoogle from './GoogleLogin'


const Login = (props) => {
	let history = useHistory();
	const { handleChange, handleSubmit, values, errors} = LoginForm(
		validate
	);
	let user={};

	

	const handleLogin = async (e) => {
		e.preventDefault();

		const { response, isError } = await handleSubmit(e);

		if (isError) {
			console.log("[Login.jsx] Error!");
			if (response.status == 400) {
				console.log("User Not Found!");
				history.push("/login");
			} else {
				console.log(response.data ?? response);
			}
		} else {
			console.log("[Login.jsx] Request Successful");
			console.log(response.data);
			user=response.data;
			await sessionStorage.setItem('User',JSON.stringify(response.data));
			await sessionStorage.setItem("search","false");
			
			history.push("/");
		}

		return false;
	};
	const responseGoogle = (response) => {
		console.log(response);
		if(response.error!="popup_closed_by_user")
		history.push("/");
		

	};

	return (
		<div className="base-container">
			<div className="headerLogin">Login</div>
			<div className="contentLogin">
				<div className="image" style={{ width: "21em" }}>
					<img className="imgLg" src={loginImg} />
				</div>
				<div className="formLogReg">
					<form onSubmit={handleLogin} noValidate>
						<div className="form-group">
							<label className="form-label">Email</label>
							<div className="inputs" style={{ marginBottom: "20px" }}>
								<input
									className="form-input"
									type="email"
									name="email"
									placeholder="Enter your email"
									value={values.email}
									onChange={handleChange}
								/>
								{errors.email && <p>{errors.email}</p>}
							</div>
						</div>
						<div className="form-group">
							<label className="form-label">Password</label>
							<div className="inputs" style={{ marginBottom: "20px" }}>
								<input
									className="form-input"
									type="password"
									name="password"
									placeholder="Enter your password"
									value={values.password}
									onChange={handleChange}
								/>
								{errors.password && <p>{errors.password}</p>}
							</div>
						</div>

						<div className="footerLogin">
							<button
								type="submit"
								className="btn"
								style={{ height: "40px", width: "11.55rem" }}
							>
								Login
							</button>
							<div style={{ marginTop: "1rem", color: "blue" }}>Or</div>
						</div>
					</form>
					<LoginGoogle />
					{/* <GoogleLogin
						clientId="1034972447130-hnne4ou2gis3k0s8gdhs0fr6hef87q5q.apps.googleusercontent.com"
						onSuccess={responseGoogle}
						onFailure={responseGoogle}
						cookiePolicy={"single_host_origin"}
						className="google_btn"
					/> */}
				</div>
			</div>
		</div>
	);
};

export default Login;
