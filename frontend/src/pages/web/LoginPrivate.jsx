import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export function LoginPrivate() {

    let getlocal = JSON.parse(localStorage.getItem('token'))

    if (getlocal != '' && getlocal != undefined) {
        return <Outlet />
    }
    else {
        return <Navigate to={"/login"} />
    }
    return (
        <div>

        </div>
    )
}
