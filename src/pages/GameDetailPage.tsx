import { Box, Heading, Spinner, Text } from "@chakra-ui/react"
import useGame from "../hooks/useGame"
import { useParams } from "react-router-dom";

const GameDetailPage = () => {

    const {slug} = useParams();
    const {data:game, isPending, error} = useGame(slug!);

if (isPending) return <Box padding={5}><Spinner /></Box>
if (error) throw error;

  return (
    <Box padding={5}>
      <Heading>{game?.name}</Heading>
      <Text>{game?.description_raw}</Text>
    </Box>
  )
}

export default GameDetailPage