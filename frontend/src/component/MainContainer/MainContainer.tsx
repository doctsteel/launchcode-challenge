import { Box, Container } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";

const MainContainer = () => {
  return (
    <Container maxW="100%">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<p>test</p>} />
      </Routes>
    </Container>
  );
};
export default MainContainer;
