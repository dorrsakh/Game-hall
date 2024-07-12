import { Box, Heading, Spinner } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";


const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isPending, error } = useGame(slug!);

  if (isPending)
    return (
      <Box padding={5}>
        <Spinner />
      </Box>
    );
  if (error || !game) throw error;

  return (
    <Box padding={5}>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
    </Box>
  );
};

export default GameDetailPage;
