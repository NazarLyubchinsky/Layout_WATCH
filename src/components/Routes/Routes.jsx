import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

import UserForm from '../Auth'
import SingleCategory from '../Categories/SingleCategory';
import ContactUs from '../ContactUs/ContactUs';
import FAQ from '../FAQ/FAQ';
import Favorite from '../Favorite/Favorite';
import Home from '../Home/Home';
import PageNone from '../PageNone/PageNone';
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';
import SingleProduct from '../Products/SingleProduct';


import Profile from '../Profile/Profile'

const AppRoutes = () => {
	return (

		<Routes>
			<Route index element={<Home />} />
			<Route path={ROUTES.PRODUCT} element={<SingleProduct />} />
			<Route path={ROUTES.PROFILE} element={<Profile />} />
			<Route path={ROUTES.CATEGORY} element={<SingleCategory />} />
			<Route path={ROUTES.USERFORM} element={<UserForm />} />
			<Route path={ROUTES.FAVORITE} element={<Favorite />} />
			<Route path={ROUTES.CONTACT} element={<ContactUs />} />
			<Route path={ROUTES.FAQ} element={<FAQ />} />
			<Route path={ROUTES.PRIVACYPOLICY} element={<PrivacyPolicy />} />
			<Route path="*" element={<PageNone status={404} />}
			/>

		</Routes>
	)
}

export default AppRoutes;

