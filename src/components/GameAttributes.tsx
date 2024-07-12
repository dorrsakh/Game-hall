import { SimpleGrid, Text } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import DefineItem from "./DefineItem";
import { Game } from "../entities/Game";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as={"dl"}>
      <DefineItem term="Platforms">
        {game.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefineItem>
      <DefineItem term="Metascore">
        {game.metacritic ? (
          <CriticScore score={game.metacritic} />
        ) : (
          <Text>_</Text>
        )}
      </DefineItem>
      <DefineItem term="Genres">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefineItem>
      <DefineItem term="Publishers">
        {game.publishers.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefineItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
