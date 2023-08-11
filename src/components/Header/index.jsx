// import React, { useEffect, useState } from 'react'
// import s from './index.module.scss'

// import { useDispatch, useSelector } from 'react-redux';
// import { toggleForm } from '../../features/user/userSlice'
// import { ROUTES } from '../../utils/routes'
// import {  useNavigate } from 'react-router-dom';

// import AVATAR from '../../images/guest.jpg'
// import SEARCH from '../../images/search (1).svg';
// import BurgerModal from './BurgerModal/BurgerModal';
// import NavigateList from './NavigateList/NavigateList';

// const Header = () => {
// 	const dispath = useDispatch();
// 	const navigate = useNavigate();

// 	const { currentUser } = useSelector(({ user }) => user)

// 	const [values, setValues] = useState({
// 		name: "Guest",
// 		avatar: AVATAR
// 	});

// 	useEffect(() => {
// 		if (!currentUser) return;
// 		setValues(currentUser)
// 	}, [currentUser])

// 	const handleClick = () => {
// 		if (!currentUser) dispath(toggleForm(true));
// 		else navigate(ROUTES.PROFILE);
// 	}


// 	return (
// 		<section className={s.section}>
// 			<div className={s.header}>
// 				<div className={s.header__wrapper}>
// 					<BurgerModal />

// 					<NavigateList />

// 					<div className={s.rigth}>
// 						<div className={s.search}>
// 							<div className={s.overlap__group}>
// 								<img className="img" alt="Vector" src={SEARCH} />
// 							</div>
// 						</div>

// 						<div className={s.user} onClick={handleClick}>
// 							<div className={s.avatar}
// 								style={{ backgroundImage: `url(${values.avatar})` }}
// 							/>
// 							<div className={s.username}>{values.name}</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	)
// }

// export default Header



import React, { useEffect, useState } from 'react'
import s from './index.module.scss'

import { useDispatch, useSelector } from 'react-redux';
import { toggleForm } from '../../features/user/userSlice'
import { ROUTES } from '../../utils/routes'
import { useNavigate } from 'react-router-dom';

import AVATAR from '../../images/guest.jpg'

import BurgerModal from './BurgerModal/BurgerModal';
import NavigateList from './NavigateList/NavigateList';
import SearchModal from './SearchModal/SearchModal';

const Header = () => {
	const dispath = useDispatch();
	const navigate = useNavigate();

	const { currentUser } = useSelector(({ user }) => user)

	const [values, setValues] = useState({
		name: "Guest",
		avatar: AVATAR
	});

	useEffect(() => {
		if (!currentUser) return;
		setValues(currentUser)
	}, [currentUser])

	const handleClick = () => {
		if (!currentUser) {
			dispath(toggleForm(true));
			document.body.style.overflow = 'hidden';
		}
		else navigate(ROUTES.PROFILE);
	}




	return (
		<section className={s.section}>
			<div className={s.header}>
				<div className={s.header__wrapper}>
					<BurgerModal />
					<NavigateList styleLink='link__color' />
					<div className={s.rigth}>
						<SearchModal />
						<div className={s.user} onClick={handleClick}>
							<div className={s.avatar}
								style={{ backgroundImage: `url(${values.avatar})` }}
							/>
							<div className={s.username}>{values.name}</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Header









