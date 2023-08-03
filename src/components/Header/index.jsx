import React, { useEffect, useState } from 'react'
import s from './index.module.scss'

import { useDispatch, useSelector } from 'react-redux';
import { toggleForm } from '../../features/user/userSlice'
import { ROUTES } from '../../utils/routes'
import { useNavigate } from 'react-router-dom';

import AVATAR from '../../images/avatar.jpg'
import SEARCH from '../../images/search (1).svg';
import BELL from '../../images/bell.svg'

const Header = () => {
	const dispath = useDispatch();
	const navigate = useNavigate();

	const { currentUser } = useSelector(({ user }) => user)

	const [values, setValues] = useState({
		name: "Guest",
		//  avatar: AVATAR
	});

	useEffect(() => {
		if (!currentUser) return;
		setValues(currentUser)
	}, [currentUser])

	const handleClick = () => {
		if (!currentUser) dispath(toggleForm(true));
		else navigate(ROUTES.PROFILE);
	}


	return (
		<section className={s.section}>
			<div className={s.header}>
				<ul className={s.list}>
					<li className={s.item}>Movies</li>
					<li className={s.item}>Series</li>
					<li className={s.item}>Documentaries</li>
				</ul>

				<div className={s.rigth}>
					<div className={s.search}>
						<div className={s.overlap__group}>
							<img className="img" alt="Vector" src={SEARCH} />
						</div>
					</div>
					<div className={s.bell}>
						<img className="img" alt="Vector" src={BELL} />
					</div>
					<div className={s.user} onClick={handleClick}>
						<div className={s.avatar}
							style={{
								backgroundImage: `url(${AVATAR})`,
							}}
						// style={{ backgroundImage: `url(${values.avatar})` }}
						/>
						<div className={s.username}>{values.name}</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Header




