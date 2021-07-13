import { useState, useEffect } from "react";
import axios from "axios";
import { ADD_USER, BASE_URL } from "../../utils/apiEndpoints";
import cookie from 'react-cookies';

const useForm = ( validate) => {
	const [values, setValues] = useState({
		username: "",
		email: "",
		password: "",
		password2: "",
	});
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};

	const handleSubmit = async  (e) => {
		e.preventDefault();

		setErrors(validate(values));
		setIsSubmitting(true);
		console.log(values);
		
		var user = {
			name: values.username,
			email: values.email,
			googleAuth: false
			// token: e.tokenObj.id_token
		}
		cookie.save('EVAC', user, {
			path: '/',
			maxAge: 84000
		});

		const data = await axios
			.post(`${BASE_URL}${ADD_USER}`, values)
			.then((response) => {
				console.log(response);
				

				return { response, isError: false };
			})
			.catch((error) => {
				console.log(error);
				return { response: error.response ?? error, isError: true };
			});

		return data;
	};


	return { handleChange, handleSubmit, values, errors };
};

export default useForm;