import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefineItem = ({ term, children }: Props) => {
  return <Box marginY={5}>
    <Heading fontSize={"md"} color="gray.500" as={"dt"}>{term}</Heading>
        <dd>{children}</dd>
  </Box>;
};

export default DefineItem;