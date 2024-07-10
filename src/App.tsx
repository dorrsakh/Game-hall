import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import GameHeading from "./components/GameHeading";
import SortSelector from "./components/SortSelector";
import GenreSelector from "./components/GenreSelector";

function App() {

  return (
    <>
      <Grid
        templateAreas={{
          base: `'nav nav' 'main main'`,
          lg: `'nav nav' 'aside main'`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} paddingLeft={"10px"}>
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <Box paddingLeft={"40px"}>
            <GameHeading />
            <Flex gap={"20px"}>
              <SortSelector />
              <Show below="lg">
                <GenreSelector />
              </Show>
              <PlatformSelector />
            </Flex>
          </Box>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
