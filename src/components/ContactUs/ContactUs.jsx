import React from 'react'
import s from './ContactUs.module.scss'

import Icon from '../../images/Contact/IconContact.svg'
import Line from '../../images/Contact/LineContact.png'
import Calling from '../../images/Contact/Calling.svg'
import Location from '../../images/Contact/Location (1).svg'
import Message from '../../images/Contact/Message.svg'
import SendMessage from './SendMessage/SendMessage'
import TitlePageWrapper from '../TitlePage/TitlePageWrapper'
const ContactUs = () => {
	return (
		<section className={s.contact}>
			<TitlePageWrapper about='Contact Us' />



			<div className={s.box}>
				<div className={s.contact__info}>
					<div className={s.phone}>
						<div className={s.calling__wrapper}>
							<img className={s.icon__img} alt="Calling" src={Calling} />
						</div>
						<div className={s.div__2}>
							<div className={s.text__wrapper}>PHONE</div>
							<div className={s.text__wrapper__2}>(+38) 096 435 4943</div>
						</div>
					</div>
					<div className={s.address}>
						<div className={s.location__wrapper}>
							<img className={s.location} alt="Location" src={Location} />
						</div>
						<div className={s.div__2}>
							<div className={s.text__wrapper}>ADDRESS</div>
							<p className={s.text__wrapper_2}>Nacogdoches, Texas(TX), Looneyville Rdy</p>
						</div>
					</div>
					<div className={s.email}>
						<div className={s.message__wrapper}>
							<img className={s.icon__img} alt="Message" src={Message} />
						</div>
						<div className={s.div__2}>
							<div className={s.text__wrapper}>EMAIL</div>
							<div className={s.text__wrapper_2}>Support@VRNas.com</div>
						</div>
					</div>
				</div>
			</div>
			<SendMessage />
		</section >
	)
}

export default ContactUs