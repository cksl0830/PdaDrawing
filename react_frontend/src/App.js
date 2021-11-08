import React from "react";
import styled from "styled-components";


class App extends React.Component {
  render() {
    return <Container>
    </Container>;
  }
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('/img/bg.png');
  background-size: cover;
  z-index:-1;
`;


export default App;