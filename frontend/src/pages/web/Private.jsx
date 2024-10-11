import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export function Private() {
    let local = JSON.parse(localStorage.getItem('authenticate'))
    if(local){
       return  <Outlet/>
    }
    else{
        return <Navigate to={"/"} />
    }
    return (
        <>

        </>
    )
}
