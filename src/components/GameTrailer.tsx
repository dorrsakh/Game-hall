import { Spinner, Image, Text } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";
import noImage from "../assets/no-image-placeholder.webp";

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
    <>
      <Text>No Trailer Available...</Text>
      <Image src={noImage}></Image>
    </>
  );
};

export default GameTrailer;
