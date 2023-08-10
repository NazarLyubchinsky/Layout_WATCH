import React from 'react'
import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../../utils/routes'

import s from './NavigateList.module.scss'

const NavigateList = ({ styleProp, closeModal, styleLink }) => {
	return (
		<ul className={`${s.list} ${s[styleProp]}`}>
			<li className={s.item}>
				<NavLink className={({ isActive }) =>
					`${s[styleLink]} ${s.link} ${isActive ? s.active : ''}`} to={ROUTES.PRIVACYPOLICY} onClick={closeModal}>
					Privacy Policy
				</NavLink>
			</li>
			<li className={s.item}>
				<NavLink className={({ isActive }) =>
					`${s[styleLink]} ${s.link} ${isActive ? s.active : ''}`} to={ROUTES.FAQ} onClick={closeModal}>
					FAQ
				</NavLink>
			</li>
			<li className={s.item}>
				<NavLink className={({ isActive }) =>
					`${s[styleLink]} ${s.link} ${isActive ? s.active : ''}`} to={ROUTES.CONTACT} onClick={closeModal}>
					Contact Us
				</NavLink>
			</li>
		</ul>
	)
}

export default NavigateList