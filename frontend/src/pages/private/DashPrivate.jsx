import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export function DashPrivate() {
  let forgotprivate = JSON.parse(localStorage.getItem("admintoken"));
  if (
    forgotprivate !== "" &&
    forgotprivate != undefined &&
    forgotprivate !== null
  ) {
    return <Outlet />;
  } else {
    return <Navigate to={"/dashboard-login"} />;
  }

}
