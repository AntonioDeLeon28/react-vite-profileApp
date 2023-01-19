import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { SelectProfile } from '../pages'

export const AuthRoutes = () => {
    return (
        <Routes>
            <Route path='/profiles' element={<SelectProfile />} />

            {/* Default Route  */}
            <Route path='/*' element={<Navigate to='/auth/profiles' />} />
        </Routes>
    )
}
