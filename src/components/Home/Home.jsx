import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getProducts } from '../../features/products/productsSlice'

import Products from '../Products/Products'
import s from './Home.module.scss'
const Home = () => {
	const dispatch = useDispatch();
	const { products: { list, filtered }, categories } = useSelector((state) => state);




	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);




	return (
		<>
			<section className={s.home}>
				<Products products={list} amount={4} title='Trending' />
			</section>
		</>
	)
}

export default Home