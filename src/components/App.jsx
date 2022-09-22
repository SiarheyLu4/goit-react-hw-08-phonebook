import styled from "styled-components";

import Navbar from "./Navbar/Navbar";
import UserRoutes from "./UserRoutes";

const App = () => {
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