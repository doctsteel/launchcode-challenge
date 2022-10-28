import { Box, HStack, Stack } from "@chakra-ui/react";
import * as React from "react";
import MainContainer from "./component/MainContainer/MainContainer";
import NavBar from "./component/Navbar/NavBar";
import MySideBar from "./component/Sidebar/MySideBar";

export const App = () => {
  return (
    <div className="App" style={{ background: "#EDF0F9" }}>
      <NavBar />
      <Box h="100vh">
        <HStack>
          <MySideBar />
          <MainContainer />
        </HStack>
      </Box>
    </div>
  );
};
