import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'

import Home from '../Home/Home'
import Profile from '../Profile/Profile'

const AppRoutes = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path={ROUTES.PROFILE} element={<Profile />} />
		</Routes>
	)
}

export default AppRoutes;