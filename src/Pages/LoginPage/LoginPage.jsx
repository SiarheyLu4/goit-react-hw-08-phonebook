import { Notify } from 'notiflix';
import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";

import LoginForm from "components/LoginForm/LoginForm";

// import { login } from "redux/auth/auth-operations";

import { getAuthError } from "redux/auth/auth-selectors";

const LoginPage = () => {
  // const dispatch = useDispatch();
  const { status, statusText } = useSelector(getAuthError);

  // const onLogin = (data) => {
  //   dispatch(login(data));
  // }

  return (
    <>
      <LoginForm />
      {status && <>{Notify.failure(`${statusText}`, { position: "center-top" })}</>}
    </>
  )
}

export default LoginPage;