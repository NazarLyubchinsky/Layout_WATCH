import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'
import s from './TitlePage.module.scss'


import Icon from '../../images/TitlePage/Icon.svg'
import Line from '../../images/TitlePage/Line.png'

const TitlePage = ({ about }) => {
	return (
		<div className={s.title}>
			<div className={s.overlap__group_wrapper}>
				<div className={s.overlap__group}>
					<div className={s.about__us}>{about}</div>
					<div className={s.div}>
						<Link to={ROUTES.HOME} className={s.home}>Home</Link>
						<img className={s.icon} alt={Icon} src={Icon} />
						<div className={s.text__wrapper}>{about}</div>
					</div>
				</div>
			</div>
			<img className={s.line} alt="Line" src={Line} />
		</div>
	)
}

export default TitlePage