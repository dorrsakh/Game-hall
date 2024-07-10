import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data, isPending, error } = useGenres();
  const setGenreId = useGameQueryStore(s => s.setGenreId);
  const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId);

  if (isPending) return <Spinner />;
  if (error) return null;

  return (
    <>
      <List>
        {data?.results.map((genre) => (
          <ListItem paddingY={"6px"}>
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize={"32px"}
                borderRadius={8}
                objectFit={"cover"}
              />
              <Button
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                onClick={() => setGenreId(genre.id)}
                variant={"link"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
