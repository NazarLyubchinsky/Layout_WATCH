
import React from "react";
import { Link } from "react-router-dom";

import s from "./index.module.scss";
import heart from '../../images/heart.svg'

const Products = ({ title, style = {}, products = [], amount }) => {

	const list = products.filter((_, i) => i < amount);

	return (
		<div className={s.products} style={style}>
			{title && <h2 className={s.title}>{title}</h2>}

			<div className={s.list}>
				{list.map(({ id, images, title, category: { name: cat }, price }) => (
					<Link to={`/products/${id}`} key={id} className={s.product}>
						<div className={s.box}>
							<div className={s.group}>
								<div className={s.overlap__group} style={{ backgroundImage: `url(${images[0]})`, }}>
									<div className={s.overlap}>
										<div className={s.text__wrapper}>{title}</div>
										<div className={s.div}>{cat}</div>
									</div>
									<div className={s.frame}>
										<img className={s.heart} alt="Heart" src={heart} />
									</div>

								</div>
							</div>
						</div>
					</Link>
				))}
			</div>

		</div>
	);
};

export default Products;