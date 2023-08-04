
// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";

// import { useGetProductsQuery } from "../../features/api/apiSlice";
// import Preloader from "../Preloader/Preloader";
// import Products from "../Products/Products";

// import s from "./index.module.scss";



// const Category = () => {
// 	const { id } = useParams();
// 	const { list } = useSelector(({ categories }) => categories);


// 	const defaultValues = {
// 		title: "",
// 	};

// 	const defaultParams = {
// 		categoryId: id,
// 		limit: 4,
// 		offset: 0,
// 		...defaultValues,
// 	};

// 	const [isEnd, setEnd] = useState(false);
// 	const [cat, setCat] = useState(null);
// 	const [items, setItems] = useState([]);
// 	const [values, setValues] = useState(defaultValues);
// 	const [params, setParams] = useState(defaultParams);

// 	const { data = [], isLoading, isSuccess } = useGetProductsQuery(params);
// 	useEffect(() => {
// 		if (!id) return;

// 		setValues(defaultValues);
// 		setItems([]);
// 		setEnd(false);
// 		setParams({ ...defaultParams, categoryId: id });
// 		// eslint-disable-next-line react-hooks/exhaustive-deps
// 	}, [id]);

// 	useEffect(() => {
// 		if (isLoading) return;

// 		if (!data.length) return setEnd(true);

// 		setItems((_items) => [..._items, ...data]);
// 	}, [data, isLoading]);

// 	useEffect(() => {
// 		if (!id || !list.length) return;

// 		const category = list.find((item) => item.id === id * 1);

// 		setCat(category);
// 	}, [list, id]);

// 	const handleChange = ({ target: { value, name } }) => {
// 		setValues({ ...values, [name]: value });

// 	};

// 	const handleSubmit = (e) => {
// 		e.preventDefault();

// 		setItems([]);
// 		setEnd(false);
// 		setParams({ ...defaultParams, ...values });


// 	};

// 	const handleReset = () => {
// 		setValues(defaultValues);
// 		setParams(defaultParams);
// 		setEnd(false);
// 	};

// 	return (
// 		<section className={s.wrapper}>
// 			<h2 className={s.title}>{cat?.name}</h2>
// 			<form className={s.filters} onSubmit={handleSubmit}>
// 				<div className={s.filter}>
// 					<input
// 						type="text"
// 						name="title"
// 						onChange={handleChange}
// 						placeholder="Product name"
// 						value={values.title}
// 					/>
// 				</div>
// 				<button type="submit" hidden />
// 			</form>

// 			{isLoading ? (
// 				<Preloader />
// 			) : !isSuccess || !items.length ? (
// 				<div className={s.back}>
// 					<span>No results</span>
// 					<button onClick={handleReset}>Reset</button>
// 				</div>
// 			) : (
// 				<Products
// 					title=""
// 					products={items}
// 					style={{ padding: 0 }}
// 					amount={items.length}
// 				/>
// 			)
// 			}

// 			{
// 				!isEnd && (
// 					<div className={s.more}>
// 						<button
// 							onClick={() =>
// 								setParams({ ...params, offset: params.offset + params.limit })
// 							}
// 						>
// 							See more
// 						</button>
// 					</div>
// 				)
// 			}
// 		</section >
// 	);
// };

// export default Category;






import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { useGetProductsQuery } from "../../features/api/apiSlice";
import Preloader from "../Preloader/Preloader";
import Products from "../Products/Products";

import s from "./index.module.scss";



const Category = () => {
	const { id } = useParams();
	const { list } = useSelector(({ categories }) => categories);


	const defaultValues = {
		title: "",
	};

	const defaultParams = {
		categoryId: id,
		limit: 4,
		offset: 0,
		...defaultValues,
	};

	const [isEnd, setEnd] = useState(false);
	const [cat, setCat] = useState(null);
	const [items, setItems] = useState([]);
	const [values, setValues] = useState(defaultValues);
	const [params, setParams] = useState(defaultParams);

	const { data = [], isLoading, isSuccess } = useGetProductsQuery(params);
	useEffect(() => {
		if (!id) return;

		setValues(defaultValues);
		setItems([]);
		setEnd(false);
		setParams({ ...defaultParams, categoryId: id });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id]);

	useEffect(() => {
		if (isLoading) return;

		if (!data.length) return setEnd(true);

		setItems((_items) => [..._items, ...data]);
	}, [data, isLoading]);

	useEffect(() => {
		if (!id || !list.length) return;

		const category = list.find((item) => item.id === id * 1);

		setCat(category);
	}, [list, id]);

	const handleChange = ({ target: { value, name } }) => {
		setValues({ ...values, [name]: value });

	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (params.title !== values.title) {
			// Only fetch products if the search criteria has changed
			setItems([]);
			setEnd(false);
			setParams({ ...defaultParams, ...values, offset: 0  });
		}
	};

	const handleReset = () => {
		setValues(defaultValues);
		setParams(defaultParams);
		setEnd(false);
	};

	return (
		<section className={s.wrapper}>
			<h2 className={s.title}>{cat?.name}</h2>
			<form className={s.filters} onSubmit={handleSubmit}>
				<div className={s.filter}>
					<input
						type="text"
						name="title"
						onChange={handleChange}
						placeholder="Product name"
						value={values.title}
					/>
				</div>
				<button type="submit" hidden />
			</form>

			{isLoading ? (
				<Preloader />
			) : !isSuccess || !items.length ? (
				<div className={s.back}>
					<span>No results</span>
					<button onClick={handleReset}>Reset</button>
				</div>
			) : (
				<Products
					title=""
					products={items}
					style={{ padding: 0 }}
					amount={items.length}
				/>
			)
			}

			{
				!isEnd && (
					<div className={s.more}>
						<button
							onClick={() =>
								setParams({ ...params, offset: params.offset + params.limit })
							}
						>
							See more
						</button>
					</div>
				)
			}
		</section >
	);
};

export default Category;

