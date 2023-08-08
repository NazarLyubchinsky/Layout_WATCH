import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../../utils/routes'

import s from './NavigateList.module.scss'

const NavigateList = ({ styleProp, styleLink }) => {
	return (
		<ul className={`${s.list} ${s[styleProp]}`}>
			<li className={s.item}>
				<Link className={`${s[styleLink]}`} to={ROUTES.PRIVACYPOLICY}>
					Privacy Policy
				</Link>
			</li>
			<li className={s.item}>
				<Link className={`${s[styleLink]}`} to={ROUTES.FAQ}>
					FAQ
				</Link>
			</li>
			<li className={s.item}>
				<Link className={`${s[styleLink]}`} to={ROUTES.CONTACT}>
					Contact Us
				</Link>
			</li>
		</ul>
	)
}

export default NavigateList