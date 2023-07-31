import React, { useEffect, useState } from 'react'
import s from './index.module.scss'

import { useDispatch, useSelector } from 'react-redux';
import { toggleForm } from '../../features/user/userSlice'
import { ROUTES } from '../../utils/routes'
import { useNavigate } from 'react-router-dom';

import AVATAR from '../../images/avatar.jpg'

const Header = () => {
	const dispath = useDispatch();
	const navigate = useNavigate();

	const { currentUser } = useSelector(({ user }) => user)

	const [values, setValues] = useState({ name: "Guest", avatar: AVATAR });

	useEffect(() => {
		if (!currentUser) return;
		setValues(currentUser)
	}, [currentUser])

	const handleClick = () => {
		if (!currentUser) dispath(toggleForm(true));
		else navigate(ROUTES.PROFILE);
	}
	return (
		<>
			<div className={s.user} onClick={handleClick}>
				<div className={s.avatar}
					style={{ backgroundImage: `url(${values.avatar})` }}
				/>
				<div className={s.username}>{values.name}</div>
			</div>
		</>
	)
}

export default Header