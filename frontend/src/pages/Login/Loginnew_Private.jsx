import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export function Loginnew_Private() {
    let loginsucceed = JSON.parse(localStorage.getItem('userauthenticate'))
    if (loginsucceed == "succeeded") {
        return <Outlet />
    }

    else {
        return <Navigate to={"/"} />
    }


    return (
        <>

        </>
    )
}
