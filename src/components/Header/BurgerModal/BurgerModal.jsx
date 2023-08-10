
import React, { useState } from 'react'
import s from './BurgerModal.module.scss'
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { ROUTES } from '../../../utils/routes';
import NavigateList from '../NavigateList/NavigateList';

import favoriteImg from '../../../images/heart (1).svg'

const BurgerModal = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { list } = useSelector(({ categories }) => categories);
	const limit = 5;

	const handleButtonClick = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		
	};

	return (
		<>
			<div className={s.modal_button_container}>
				<div className={s.open_modal_button} onClick={handleButtonClick}>
					<MenuIcon />
				</div>

				{isModalOpen && (
					<>
						<div className={s.modal_overlay} onClick={closeModal}>
						</div>
						<div className={s.modal_content}>
							<section className={s.sidebar} >
								<span className={s.close_modal_button} onClick={closeModal}>
									&times;
								</span>
								<Link to='/' className={s.title} onClick={closeModal}>WATCH</Link>
								<nav className={s.nav}>
									<ul className={s.menu}>
										{list.slice(0, limit).map(({ id, name }) => (
											<li key={id}>
												<NavLink
													className={({ isActive }) =>
														`${s.link} ${isActive ? s.active : ''}`
													}
													to={`/categories/${id}`}
													onClick={closeModal}
												>
													{name}
												</NavLink>
											</li>
										))}
									</ul>
									<NavigateList styleProp='list__modal' closeModal={closeModal}  />


									<ul className={s.user}>
										<li className={s.account}>
											<NavLink to={ROUTES.FAVORITE} className={({ isActive }) =>
												`${s.favourites} ${isActive ? s.active : ''}`
											} onClick={closeModal}>
												<img src={favoriteImg} alt={favoriteImg} />Favourites

												{/* <span className={s.favorite}><img src={favoriteImg} alt={favoriteImg} />Favourites</span> */}
											</NavLink>
										</li>
									</ul>
								</nav>
							</section >

						</div>
					</>
				)}
			</div>
		</>
	)
}

export default BurgerModal
