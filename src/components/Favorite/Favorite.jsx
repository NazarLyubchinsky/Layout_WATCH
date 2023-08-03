import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { removeItemToFavorite } from '../../features/user/userSlice';

import s from "./Favorite.module.scss";
import heart from '../../images/heart.svg'
const Favorite = () => {
	const dispatch = useDispatch();
	const { favorite } = useSelector(({ user }) => user);
	console.log(favorite)

	// const removeItem = (id) => {
	// 	dispatch(removeItemToFavorite(id));
	// };

	return (
		<section className={s.favorit}>
			<h2 className={s.favorite__title} >Your favorite</h2>

			{!favorite.length ? (
				<div className={s.empty}>Here is empty</div>
			) : (
				<>
					<div className={s.list}>
						{favorite.map((item) => {
							const { title, category, images, price, id, updatedAt } = item;

							const updatedAtDate = new Date(updatedAt);
							const hours = updatedAtDate.getHours();
							const minutes = updatedAtDate.getMinutes();
							const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
							const formattedDate = updatedAtDate.toLocaleDateString();
							return (
								<div className={s.list}>
									<div className={s.product}>
										<div className={s.item} key={id}>
											<div className={s.box}>
												<div className={s.group}>
													<div className={s.overlap__group} style={{ backgroundImage: `url(${images[0]})`, }}>
														<div className={s.overlap}>
															<div className={s.text__wrapper}>{title}</div>
															<div className={s.div}>{category.name}</div>
														</div>

														<div className={s.frame}>
															<img className={s.heart} alt="Heart" src={heart} />
														</div>

													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</>
			)
			}
		</section >
	)
}

export default Favorite