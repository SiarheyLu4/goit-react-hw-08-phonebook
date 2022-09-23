import { Link, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { isAuth } from "redux/auth/auth-selectors";



const MainPage = () => {
  const isLogin = useSelector(isAuth);

  if (isLogin) {
    return <Navigate to="/contacts" />
  }

  return (
    <>
      <P>Welcome to Phonebook! Please <OnLink to="/login" >login</OnLink> to your account or <OnLink to="/register" >register</OnLink>!</P>
    </>
  )
}

export default MainPage;

const P = styled.p`
  font-size: 24px;
  text-align: center;
`

const OnLink = styled(Link)`
  font-size: 24px;
  text-decoration: none;
  color: slateblue;
  &:hover{
    background: #d3a6a6;
  }
`