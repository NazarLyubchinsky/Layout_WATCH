import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { ROUTES } from "../../utils/routes";

import s from "./index.module.scss";

import { addItemToFavorite } from "../../features/user/userSlice";


const Product = (item) => {
	const { title, images, description, updatedAt } = item;
	const updatedAtDate = new Date(updatedAt);
	const hours = updatedAtDate.getHours();
	const minutes = updatedAtDate.getMinutes();
	const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
	const formattedDate = updatedAtDate.toLocaleDateString();

	const dispatch = useDispatch();

	const [showMessage, setShowMessage] = useState(false);
	const [isAddedToFavorite, setIsAddedToFavorite] = useState(false);

	const addToFavorite = () => {
		if (!isAddedToFavorite) {
			dispatch(addItemToFavorite(item));
			setShowMessage(true);
			// This will reset the showMessage state after 3 seconds
			setTimeout(() => {
				setShowMessage(false);
			}, 1700);
			setIsAddedToFavorite(true);
		}
	};

	return (
		<section className={s.product__card}>
			<div className={s.images}>
				<div
					className={s.current}
					style={{ backgroundImage: `url(${images[0]})`, borderRadius: '25px' }}
				/>
			</div>
			<div className={s.info}>
				<div className={s.date}>{formattedDate}, {formattedTime}</div>

				<div className={s.info__text}>
					<h1 className={s.title}>{title}</h1>


					<p className={s.description}>{description}</p>

					<div className={s.actions}>
						<button onClick={addToFavorite} className={s.favourite}>Add to favourites</button>
					</div>

					<div className={s.bottom}>
						<div className={s.purchase}>19 people purchased</div>

						<Link className={s.return} to={ROUTES.HOME}>Return to store</Link>
					</div>
				</div>
			</div>
			{showMessage && (
				<div id={s.message} className={s.mess}>
					Successfully
				</div>
			)}
		</section>
	);
};

export default Product;


