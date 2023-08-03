import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

import UserForm from '../Auth'
import SingleCategory from '../Categories/SingleCategory';
import Favorite from '../Favorite/Favorite';
import Home from '../Home/Home';
import SingleProduct from '../Products/SingleProduct';


import Profile from '../Profile/Profile'

const AppRoutes = () => {
	return (
	
		<Routes>
			<Route index element={<Home /> } />
			<Route path={ROUTES.PRODUCT} element={<SingleProduct />} />
			<Route path={ROUTES.PROFILE} element={<Profile />} />
			<Route path={ROUTES.CATEGORY} element={<SingleCategory />} />
			<Route path={ROUTES.USERFORM} element={ <UserForm />} />
			<Route path={ROUTES.FAVORITE} element={<Favorite />} />
	
		</Routes>
	)
}

export default AppRoutes;

