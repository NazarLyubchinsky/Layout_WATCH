import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { getCategories } from '../../features/categories/CategoriesSlice';
import { ROUTES } from '../../utils/routes';
import s from './Sidebar.module.scss';
import favoriteImg from '../../images/heart (1).svg'
import Preloader from '../Preloader/Preloader';



const Sidebar = () => {
	const { list, isLoading } = useSelector((state) => state.categories);
	const dispatch = useDispatch();

	const limit = 5;

	useEffect(() => {
		// Dispatch the getCategories action when the component mounts
		dispatch(getCategories());
	}, [dispatch]);



	return !list ? (
		<section className={s.sidebar} >
			<Preloader />
		</section>
	) : (
		<>
			<section className={s.sidebar} >
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
							</Link>
						</li>
					</ul>
				</nav>
			</section >
		</>
	)
};

export default Sidebar;


// (
// 	<section className={s.sidebar}>
// 		<Link to='/' className={s.title}>WATCH</Link>
// 		<nav className={s.nav}>
// 			<ul className={s.menu}>
// 				{list.slice(0, limit).map(({ id, name, image }) => (
// 					<li key={id}>
// 						<NavLink
// 							className={({ isActive }) =>
// 								`${s.link} ${isActive ? s.active : ''}`
// 							}
// 							to={`/categories/${id}`}
// 						>
// 							{name}
// 						</NavLink>
// 					</li>
// 				))}
// 			</ul>
// 			<ul className={s.user}>
// 				<li className={s.account}>
// 					<Link to={ROUTES.FAVORITE} className={s.favourites}>
// 						<span className={s.favorite}><img src={favoriteImg} alt={favoriteImg} />	Favourites</span>
// 					</Link>
// 				</li>
// 			</ul>
// 		</nav>
// 	</section>
// );