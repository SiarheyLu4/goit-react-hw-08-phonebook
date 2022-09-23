import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import { isAuth } from "redux/auth/auth-selectors";

const PrivateRoute = () => {
  const isLogin = useSelector(isAuth);

  if (!isLogin) {
    return <Navigate to="/login" />
  }

  return (
    <Outlet/>
  )

}

export default PrivateRoute;