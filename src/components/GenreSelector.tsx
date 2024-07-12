import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGenres from "../hooks/useGenres";
import { Genre } from "../entities/Genre";
import useGenre from "../hooks/useGenre";
import useGameQueryStore from "../store";

const GenreSelector = () => {
  const { data, error } = useGenres();

  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenre = useGameQueryStore((s) => s.setGenreId);

  const selectedGenre = useGenre(selectedGenreId);
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedGenre?.name || "Genres"}
      </MenuButton>
      <MenuList>
        {data?.results.map((genre: Genre) => (
          <MenuItem onClick={() => setSelectedGenre(genre.id)} key={genre.id}>
            {genre.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default GenreSelector;
