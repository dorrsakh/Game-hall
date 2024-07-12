import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children?: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;
  const summary = expanded ? children : children?.substring(0, limit) + "...";

  if (children && children.length <= limit) return <Text>{children}</Text>;
  if (!children) return null;

  return (
    <Text lineHeight={7} marginTop={2}>
      {summary}
      <Button
        height={9}
        bg="yellow.600"
        colorScheme="black"
        _hover={{ bg: "yellow.500", transition: "all 0.3s linear" }}
        borderRadius={10}
        marginLeft={1}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Show More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
