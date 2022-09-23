import { useSelector } from "react-redux";

import { getUser } from "redux/auth/auth-selectors";
import styled from "styled-components";

const NavbarUser = () => {
  const { name } = useSelector(getUser);
  return (
    <Card>
      <Span>{name}</Span>
      <Btm type="button">Logout</Btm>
    </Card>
  )
}

export default NavbarUser;

const Card = styled.div`
  display: flex;
`

const Span = styled.span`
  font-size: 24px;
  padding: 20px;
  text-decoration: none;
  color: slateblue;
`
const Btm = styled.button`
  font-size: 24px;
  padding: 20px;
  color: slateblue;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background: #d3a6a6;
  }
`