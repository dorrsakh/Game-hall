import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);

  const selectedGenre = useGenre(selectedGenreId);
  const selectedPlatform = usePlatform(selectedPlatformId);

  const heading = `${selectedPlatform?.name || ""} ${
    selectedGenre?.name || ""
  } Games`;
  return (
    <Heading fontSize={"5xl"} as={"h1"} marginY={5}>
      {heading}
    </Heading>
  );
};
export default GameHeading;
