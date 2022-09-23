import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Navbar from "./Navbar/Navbar";
import UserRoutes from "./UserRoutes";

import { current } from "redux/auth/auth-operations";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <Container>
      <Navbar />
      <UserRoutes/>
    </Container>
  );
};

export default App;

const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`