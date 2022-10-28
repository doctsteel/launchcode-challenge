import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import CreateQuoteCard from "./CreateQuoteCard/CreateQuoteCard";

const Home = () => {
  return (
    <Grid
      h="100vh"
      w="100%"
      pt={4}
      templateRows="repeat(4, 1fr)"
      templateColumns="repeat(3, 1fr)"
      gap={4}
    >
      <GridItem colSpan={3} bg="tomato" />
      <GridItem bg="white">
        <CreateQuoteCard />
      </GridItem>
      <GridItem bg="tomato" />
      <GridItem bg="tomato" />
      <GridItem bg="tomato" />
      <GridItem bg="tomato" />
    </Grid>
  );
};

export default Home;
