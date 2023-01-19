import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { ProfileInfoRoutes } from '../profile/routes/ProfileInfoRoutes'

export const AppRouter = () => {
    return (
        <Routes>

            {/* Select a profile */}
            <Route path='/auth/*' element={<AuthRoutes />} />

            {/* Profile Info as a default route */}
            <Route path='/*' element={<ProfileInfoRoutes />} />

        </Routes>
    )
}
