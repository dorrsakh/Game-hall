import { Grid, GridItem, Show, Box, Flex } from '@chakra-ui/react'
import GameGrid from '../components/GameGrid'
import GameHeading from '../components/GameHeading'
import GenreList from '../components/GenreList'
import GenreSelector from '../components/GenreSelector'
import PlatformSelector from '../components/PlatformSelector'
import SortSelector from '../components/SortSelector'

const HomePage = () => {
  return (
    <Grid
        templateAreas={{
          base: `'main main'`,
          lg: `'aside main'`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
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
  )
}

export default HomePage