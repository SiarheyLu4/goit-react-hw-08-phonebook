import { Notify } from 'notiflix';
import { useSelector } from "react-redux";

import RegisterForm from "components/RegisterForm/RegisterForm";

import { getAuthError } from "redux/auth/auth-selectors";

const RegisterPage = () => {
  const { status, statusText } = useSelector(getAuthError);

  return (
    <>
      <RegisterForm />
      {status && <>{Notify.failure(`${statusText}`, { position: "center-top" })}</>}
    </>
  )
}

export default RegisterPage;