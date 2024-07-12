import { Spinner } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, isPending, error } = useTrailers(gameId);
  if (isPending) return <Spinner />;
  if (error) throw error;
  const firstTrailerObj = data?.results[0];

  return firstTrailerObj ? (
    <video
      controls
      src={firstTrailerObj.data[480]}
      poster={firstTrailerObj.preview}
    />
  ) : (
    <></>
  );
};

export default GameTrailer;
