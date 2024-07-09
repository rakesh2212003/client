import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Home, Login } from './pages'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/home' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
        </Routes>
    )
}

export default AllRoutes