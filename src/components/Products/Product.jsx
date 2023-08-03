import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";

import { ROUTES } from "../../utils/routes";

import s from "./index.module.scss";

import { addItemToCart, addItemToFavorite } from "../../features/user/userSlice";


const Product = (item) => {
	const { title, images, description, updatedAt } = item;

	const updatedAtDate = new Date(updatedAt);
	const hours = updatedAtDate.getHours();
	const minutes = updatedAtDate.getMinutes();
	const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
	const formattedDate = updatedAtDate.toLocaleDateString();

	const dispatch = useDispatch();

	// const [currentImage, setCurrentImage] = useState();
	// const [currentSize, setCurrentSize] = useState();

	// useEffect(() => {
	// 	if (!images.length) return;

	// 	setCurrentImage(images[0]);
	// }, [images]);

	// const addToCart = () => {
	// 	dispatch(addItemToCart(item));
	// };
	const addToFavorite = () => {
		dispatch(addItemToFavorite(item));
		
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
						{/* <button
						onClick={addToCart}
						className={s.add}
						disabled={!currentSize}
					>
						Add to cart
					</button> */}
						<button onClick={addToFavorite} className={s.favourite}>Add to favourites</button>
					</div>

					<div className={s.bottom}>
						<div className={s.purchase}>19 people purchased</div>

						<Link className={s.return} to={ROUTES.HOME}>Return to store</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Product;