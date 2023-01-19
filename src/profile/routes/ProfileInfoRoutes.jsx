import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ProfileInfo } from '../pages/ProfileInfo'

export const ProfileInfoRoutes = () => {
    return (
        <Routes>
            
            <Route path='/profileInfo' element={<ProfileInfo />} />

            {/* Default Route  */}
            <Route path='/*' element={<Navigate to='/profileInfo' />} />

        </Routes>
    )
}
