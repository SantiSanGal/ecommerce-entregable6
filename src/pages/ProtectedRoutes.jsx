import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {

    if (localStorage.getItem('token')) {
        return <Outlet />
        // si colocamos una ruta hija, con el outlet se renderiza la ruta hija
        //entonces si está loggeado el usuario, mostrará la ruta
    } else {
        return <Navigate to='/user/login' />
    }
}

export default ProtectedRoutes