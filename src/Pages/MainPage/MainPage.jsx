import { Link } from "react-router-dom";
import styled from "styled-components";



const MainPage = () => {

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