import { useSelector, useDispatch } from "react-redux";

import { logout } from "redux/auth/auth-operations";

import { getUser } from "redux/auth/auth-selectors";
import styled from "styled-components";

const NavbarUser = () => {
  const { name } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => dispatch(logout());

  return (
    <Card>
      <Span>{name}</Span>
      <Btm type="button" onClick={onLogout} >Logout</Btm>
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