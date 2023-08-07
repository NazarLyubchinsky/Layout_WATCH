import React from 'react'
import s from './FAQ.module.scss'

import iconUp from '../../images/FAQ/IconUp.svg'
import IconDown from '../../images/FAQ/IconDown.svg'
import LineWhite from '../../images/FAQ/LineWhite.svg'

import { useState } from 'react'
import TitlePageWrapper from '../TitlePage/TitlePageWrapper'
const FAQ = () => {


	const [isOpen, setIsOpen] = useState(false);
	const [currentQuestion, setCurrentQuestion] = useState(null);


	let que = [
		{ id: 1, question: 'Lorem, ipsum dolor.?' },
		{ id: 2, question: 'Loreoremsdd, ipsum dolor.?' },
		{ id: 3, question: 'Lorem?' },
	]

	return (
		<section className={s.faq}>
			<TitlePageWrapper about="FAQ" />
			<div className={s.asked}>
				<div className={s.text}>
					<div className={s.text__top}>FAQ</div>
					<h3 className={s.text__bottom}>Frequently Asked Questions</h3>
				</div>
				<p className={s.info}>
					At VRNas, we want to make sure that you have all the information you need to make informed decisions about our
					VR services. Here are some of the most common questions we receive:
				</p>
			</div>

			<div className={s.bottom}>
				{
					que.map((item, index) => {
						return (
							<div key={index} className={s.bottom__wrapper} onClick={() => {
								if (currentQuestion === item.id) {
									if (isOpen) {
										setIsOpen(false);
									} else {
										setIsOpen(true);
									}
								} else {
									setIsOpen(true);
									setCurrentQuestion(item.id);
								}
							}}>
								<div className={s.bottom__question} >{item.question}</div>
								<img className={s.bottom__line} alt={LineWhite} src={LineWhite} />
								<p className={s.bottom__text} style={{ display: isOpen && item.id === currentQuestion ? 'block' : 'none' }}>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Id saepe in atque velit, veniam error dolorem quo quos iusto voluptatibus deleniti, labore excepturi voluptatem quibusdam placeat tempora! In, laudantium aut!
								</p>
								{
									isOpen ? (
										<img className={s.bottom__icon} alt={iconUp} src={iconUp} />
									) : (
										<img className={s.bottom__icon} alt={iconUp} src={IconDown} />
									)
								}
							</div>
						);
					})
				}
			</div>
		</section >
	)
}

export default FAQ