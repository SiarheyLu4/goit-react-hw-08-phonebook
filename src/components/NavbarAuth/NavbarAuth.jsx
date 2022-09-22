import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavbarAuth = () => {
  return (
    <Card>
      <HeaderLink to="/register">Register</HeaderLink>
      <HeaderLink to="/login">Login</HeaderLink>
    </Card>
  )
}

export default NavbarAuth;

const Card = styled.div`
  display: flex;
`

const HeaderLink = styled(NavLink)`
  font-size: 24px;
  padding: 20px;
  text-decoration: none;
  color: slateblue;
  &.active {
    background-color: #cfc7ff;
    color: black;
  }
`
