import styled from "styled-components";

import NavbarAuth from "components/NavbarAuth/NavbarAuth";
import NavbarMenu from "components/NavbarMenu/NavbarMenu";

const Navbar = () => {
  return (
    <NavbarCard>
      <NavbarMenu />
      <NavbarAuth/>
    </NavbarCard>
  )
}

export default Navbar;

const NavbarCard = styled.div`
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: lavender;

`