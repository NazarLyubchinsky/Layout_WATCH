import React from 'react'
import { Link } from 'react-router-dom';
import s from "./index.module.scss";


const Categories = ({ title, products = [], amount }) => {
	const list = products.filter((_, i) => i < amount);
	return (
		<section className={s.section}>
			<h2>{title}</h2>
			<div className={s.list}>
				{list.map(({ id, name, image }) => (
					<Link to={`/categories/${id}`} key={id} className={s.item}>
						<div
							className={s.image}
							style={{ backgroundImage: `url(${image})` }}
						/>
						<h3 className={s.title}>{name}</h3>
					</Link>
				))}
			</div>
			
		</section>
	)
}

export default Categories