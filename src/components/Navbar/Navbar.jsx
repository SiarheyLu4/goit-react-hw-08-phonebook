import styled from "styled-components";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { isAuth } from "redux/auth/auth-selectors";

import NavbarAuth from "components/NavbarAuth/NavbarAuth";
import NavbarMenu from "components/NavbarMenu/NavbarMenu";
import NavbarUser from "components/NavbarUser/NavbarUser";


const Navbar = () => {
  const isLogin = useSelector(isAuth);


  return (
    <NavbarCard>
      {/* <h1>Phonebook</h1> */}
      <HeaderLink to="/" >Phonebook</HeaderLink>
      {isLogin && <NavbarMenu />}
      {isLogin ? <NavbarUser /> : <NavbarAuth />}
    </NavbarCard>
  )
}

export default Navbar;

const NavbarCard = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: lavender;
`

const HeaderLink = styled(NavLink)`
  font-size: 24px;
  padding: 20px;
  text-decoration: none;
  color: slateblue;
  &:hover{
    background: #d3a6a6;
  }
  &.active {
    background-color: #cfc7ff;
    color: black;
  }
`