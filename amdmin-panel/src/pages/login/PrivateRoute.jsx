import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export function PrivateRoute() {
    let localdata = JSON.parse(localStorage.getItem('admintoken'))
    console.log(localdata)

    if (localdata != "" && localdata != undefined) {
        return <Outlet />
    }
    else {
        return <Navigate to={"/"} />
    }
    return (
        <div>

        </div>
    )
}
