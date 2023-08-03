// import React from 'react'
// import {  NavLink } from 'react-router-dom'
// import s from './Sidebar.module.scss'

// import COFFE from '../../images/coffee.svg'
// import { useSelector } from 'react-redux'

// const Sidebar = () => {
// 	const { list } = useSelector(({ categories }) => categories);
// 	return (
// 		<>
// 			<section className={s.sidebar}>
// 				<div className={s.title}><img src={COFFE} alt="COFFE" /> WATCH</div>
// 				{/* <nav>
// 					<ul className={s.menu}>
// 						<li >
// 							<Link to='/'>Home</Link>
// 						</li>
// 						<li >
// 							<Link>Favourites</Link>
// 						</li>
// 					</ul>
// 				</nav> */}
// 					<nav>
// 				<ul className={s.menu}>
// 					{list.map(({ id, name }) => (
// 						<li key={id}>
// 							<NavLink
// 								className={({ isActive }) =>
// 									`${s.link} ${isActive ? s.active : ''}`
// 								}
// 								to={`/categories/${id}`}>
// 								{name}
// 							</NavLink>
// 						</li>
// 					))}
// 				</ul>
// 			</nav>

// 				<div className={s.footer}>
// 					<a href="/help" target="_blank" className={s.link}>
// 						Help
// 					</a>
// 					<a
// 						href="/terms"
// 						target="_blank"
// 						className={s.link}
// 						style={{ textDecoration: "underline" }}
// 					>
// 						Terms & Conditions
// 					</a>
// 				</div>
// 			</section>
// 		</>
// 	)
// }

// export default Sidebar



// 
// Sidebar.js

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { getCategories } from '../../features/categories/CategoriesSlice';
import { ROUTES } from '../../utils/routes';
import s from './Sidebar.module.scss';
import favoriteImg from '../../images/heart (1).svg'

const Sidebar = () => {
	const { list, isLoading } = useSelector((state) => state.categories);
	const { favorite } = useSelector(({ user }) => user)
	const dispatch = useDispatch();


	const limit = 5;

	useEffect(() => {
		// Dispatch the getCategories action when the component mounts
		dispatch(getCategories());
	}, [dispatch]);

	if (isLoading) {
		return <div>Loading...</div>; // Show a loader if categories are still loading
	}

	return (
		<section className={s.sidebar}>
			<Link to='/' className={s.title}>WATCH</Link>
			<nav className={s.nav}>
				<ul className={s.menu}>
					{list.slice(0, limit).map(({ id, name, image }) => (
						<li key={id}>
							<NavLink
								className={({ isActive }) =>
									`${s.link} ${isActive ? s.active : ''}`
								}
								to={`/categories/${id}`}
							>
								{name}
							</NavLink>
						</li>
					))}
				</ul>
				<ul className={s.user}>
					<li className={s.account}>
						<Link to={ROUTES.FAVORITE} className={s.favourites}>
							<span className={s.favorite}><img src={favoriteImg} alt={favoriteImg} />	Favourites</span>
							{/* {favorite.length && (
								<span className={s.count}>{favorite.length}</span>
							)} */}
						</Link>
					</li>
				</ul>
			</nav>


			<div className={s.footer}>
				<a href="/help" target="_blank" className={s.link}>
					Help
				</a>
				<a
					href="/terms"
					target="_blank"
					className={s.link}
					style={{ textDecoration: 'underline' }}
				>
					Terms & Conditions
				</a>
			</div>
		</section>
	);
};

export default Sidebar;
