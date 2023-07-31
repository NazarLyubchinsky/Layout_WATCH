import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleForm, toggleFormType } from '../../features/user/userSlice';

import Login from './Login';
import Register from './Register';
import s from './index.module.scss';

const UserForm = () => {
	const dispatch = useDispatch();
	const { showForm, formType } = useSelector((state) => state.user);

	const closeForm = () => dispatch(toggleForm(false));
	const toggleCurrentFormType = (type) => dispatch(toggleFormType(type));

	return (

		showForm ? (<>
			<div className={s.overlay} onClick={closeForm} />
			{formType === 'signup' ? (
				<Login toggleCurrentFormType={toggleCurrentFormType}
					closeForm={closeForm} />
			) : (
				<Register toggleCurrentFormType={toggleCurrentFormType}
					closeForm={closeForm} />
			)}
		</>
		) : (
			<></>
		)
	);
}

export default UserForm;
