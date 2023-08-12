import React from "react";
import { Link } from "react-router-dom";
// import Preloader from "../Preloader/Preloader";

import s from "./index.module.scss";

const Products = ({ title, products = [], amount }) => {

	const list = products.filter((_, i) => i < amount);

	return (
		<div className={s.products} >
			{title && <h2 className={s.title}>{title}</h2>}


			<div className={s.list}>
				{
					!list ? (
						<p className={s.preloader}
							style={{
								display: 'flex',
								justifyContent: 'center',
								width: '100%',
							}}>	No results</p>
					) : (
						list.map(({ id, images, title, category: { name: cat } }) => (
							<Link to={`/products/${id}`} key={id} className={s.product}>
								<div className={s.box}>
									<div className={s.group}>
										<div className={s.overlap__group} style={{ backgroundImage: `url(${images[0]})`, }}>
											<div className={s.overlap}>
												<div className={s.text__wrapper}>{title}</div>
												<div className={s.div}>{cat}</div>
											</div>
										</div>
									</div>
								</div>
							</Link>
						))

					)
				}

			</div>

		</div>
	);
};

export default Products;