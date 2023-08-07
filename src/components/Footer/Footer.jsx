import React from 'react'
import s from './Footer.module.scss'

import twitter from '../../images/Footer/twit.svg'
import face from '../../images/Footer/face.svg'
import instagram from '../../images/Footer/inst.svg'
import git from '../../images/Footer/git.svg'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'

const Footer = () => {
	return (
		<footer className={s.footer}>
			<ul className={s.social}>
				<li className={s.item}><Link to='https://twitter.com/' target='_blank'><img src={twitter} alt={twitter} /></Link></li>
				<li className={s.item}><Link to='https://facebook.com' target='_blank'><img src={face} alt={face} /></Link></li>
				<li className={s.item}><Link to='https://instagram.com' target='_blank'><img src={instagram} alt={instagram} /></Link></li>
				<li className={s.item}><Link to='https://github.com/NazarLyubchinsky' target='_blank'><img src={git} alt={git} /></Link></li>
			</ul>
			<div>
				<ul className={s.list}>
					<li className={s.item}>
						<Link to={ROUTES.PRIVACYPOLICY}>
							Privacy Policy
						</Link>
					</li>
					<li className={s.item}>
						<Link to={ROUTES.FAQ}>
							FAQ
						</Link>
					</li>
					<li className={s.item}>
						<Link to={ROUTES.CONTACT}>
							Contact Us
						</Link>
					</li>
				</ul>
			</div>
		</footer>
	)
}

export default Footer