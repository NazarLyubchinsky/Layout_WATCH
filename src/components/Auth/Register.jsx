import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../features/user/userSlice";

import s from './index.module.scss';

const Register = ({ toggleCurrentFormType, closeForm }) => {
	const dispatch = useDispatch();
	const [values, setValues] = useState({
		name: "",
		email: "",
		password: "",
	});

	const handleChange = ({ target: { value, name } }) => {
		setValues({ ...values, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const isNotEmpty = Object.values(values).every((val) => val);

		if (!isNotEmpty) return;

		dispatch(createUser(values));
		closeForm();
	};

	return (
		<div className={s.wrapper}>
			<div className={s.close} onClick={closeForm}>
				<svg className="icon">
					<use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`} />
				</svg>
			</div>

			<div className={s.title}>Sign Up</div>

			<form className={s.form} onSubmit={handleSubmit}>
				<div className={s.group}>
					<input
						type="email"
						placeholder="Your email"
						name="email"
						value={values.email}
						autoComplete="off"
						onChange={handleChange}
						required
					/>
				</div>

				<div className={s.group}>
					<input
						type="name"
						placeholder="Your name"
						name="name"
						value={values.name}
						autoComplete="off"
						onChange={handleChange}
						required
					/>
				</div>

				<div className={s.group}>
					<input
						type="password"
						placeholder="Your password"
						name="password"
						value={values.password}
						autoComplete="off"
						onChange={handleChange}
						required
					/>
				</div>

				<div className={s.link}
					onClick={() => toggleCurrentFormType("login")}
				>I already have an account</div>

				<button type="submit" className={s.submit}>
					Create an account
				</button>
			</form>
		</div>
	);
};

export default Register;