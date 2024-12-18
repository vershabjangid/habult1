import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export function ForgotPrivate() {
  let forgotprivate = JSON.parse(localStorage.getItem("forgottoken"));
  console.log(forgotprivate);
  if (
    forgotprivate != "" &&
    forgotprivate != undefined &&
    forgotprivate != null
  ) {
    return <Outlet />;
  } else {
    return <Navigate to={"/login"} />;
  }
  return <></>;
}
