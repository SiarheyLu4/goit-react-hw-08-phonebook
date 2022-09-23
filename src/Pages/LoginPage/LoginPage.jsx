import { Notify } from 'notiflix';
import { useSelector, useDispatch } from "react-redux";
// import { Navigate } from "react-router-dom";

import LoginForm from "components/LoginForm/LoginForm";

import { login } from "redux/auth/auth-operations";

import { getAuthError, isAuth } from "redux/auth/auth-selectors";

const LoginPage = () => {
  const dispatch = useDispatch();
  const { status, statusText } = useSelector(getAuthError);
  // const isLogin = useSelector(isAuth);

  const onLogin = (data) => {
    dispatch(login(data));
  }

  // if (isLogin) {
  //   return <Navigate to="/contacts" />
  // }

  return (
    <>
      <LoginForm onSubmit={onLogin} />
      {status && <>{Notify.failure(`${statusText}`, { position: "center-top" })}</>}
    </>
  )
}

export default LoginPage;