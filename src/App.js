import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import styled from "styled-components";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Container>
    </Router>
  );
}

const Container = styled.div`
`

export default App;
