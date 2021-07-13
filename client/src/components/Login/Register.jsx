import React from "react";
import validate from './validateInfo';
import useForm from './useForm';
import loginImg from "./login.svg";
import "./styles.scss";
import { useHistory } from "react-router-dom";

const Register = (props) => {
  let history = useHistory();
  const { handleChange, handleSubmit, values, errors } = useForm(
    
    validate
  );

  const handleRegister = async (e) => {
		e.preventDefault();

		const { response, isError } = await handleSubmit(e);

		if (isError) {
			console.log("[Register.jsx] Error!");
			if (response.status == 400) {
				console.log("Register Failed!");
				history.push("/error");
			} 
      else if(response.status===300)
      {
        console.log("User Already Present");
        sessionStorage.setItem('User',JSON.stringify(response.data));
        history.push("/")
      }
      else {
				console.log(response.data ?? response);
			}
		} else {
			console.log("Register Request Successful");
			console.log(response.data);
      await sessionStorage.setItem('User',JSON.stringify(response.data));
      history.push('/');
		}

		return false;
	}

  return (
    <div className='base-container'>
    <div className="headerLogin">Register</div>
    <div className='contentLogin'>
    <div className="image" style={{width:'15em'}}>
      <img className="imgLg" src={loginImg} />
    </div>
        <div className="formLogReg">
      <form onSubmit={handleRegister}  noValidate>
        <div className='form-group'>
          <label className='form-label'>Username</label>
          <div className='inputs'>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p className='textP'>{errors.username}</p>}
          </div> 
        </div>
        <div className='form-group'>
          <label className='form-label'>Email</label>
          <div className="inputs">
           <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
           />
                {errors.email && <p className='textP'>{errors.email}</p>}

          </div>
          
        </div>
        <div className='form-group'>
          <label className='form-label'>Password</label>
          <div className='inputs'>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
                {errors.password && <p className='textP'>{errors.password}</p>}

          </div>
          
        </div>
        <div className='form-group'>
          <label className='form-label'>Confirm Password</label>
          <div className='inputs'>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={values.password2}
            onChange={handleChange}
          />
                {errors.password2 && <p className='textP'>{errors.password2}</p>}

          </div>
          
          
        </div>
            <div className="footerLogin">
          <button type="submit" className="btn">
            Register
          </button>
        </div>
        
      </form>
    </div>
    </div>
       
    </div>
  );
};

export default Register;
