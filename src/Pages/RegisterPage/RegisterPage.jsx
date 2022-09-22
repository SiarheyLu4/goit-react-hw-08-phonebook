import { Notify } from 'notiflix';
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from 'react-router-dom';

import RegisterForm from "components/RegisterForm/RegisterForm";

import { signup } from "redux/auth/auth-operations";

import { getAuthError, isAuth } from "redux/auth/auth-selectors";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { status, statusText } = useSelector(getAuthError);
  const isLogin = useSelector(isAuth);

  const onRegister = (data) => {
    dispatch(signup(data));
  }

  if (isLogin) {
    return <Navigate to="/contacts" />
  }

  return (
    <>
      <RegisterForm onSubmit={onRegister} />
      {status && <>{Notify.failure(`${statusText}`, { position: "center-top" })}</>}
    </>
  )
}

export default RegisterPage;