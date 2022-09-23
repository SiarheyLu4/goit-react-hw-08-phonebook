import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavbarMenu = () => {

  return (
    <HeaderLink to='/contacts'>Contacts</HeaderLink>
  )
}

export default NavbarMenu;

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