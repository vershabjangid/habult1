import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export function WebPrivate() {
  let forgotprivate = JSON.parse(localStorage.getItem("logintoken"));
  console.log(forgotprivate);
  if (
    forgotprivate !== "" &&
    forgotprivate !== undefined &&
    forgotprivate !== null
  ) {
    return <Outlet />;
  } else {
    return <Navigate to={"/login"} />;
  }
}
