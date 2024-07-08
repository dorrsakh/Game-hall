import { Flex, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Flex width={"180px"} alignItems={"center"} gap={"10px"}>
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        colorScheme="green"
      />
      <Text >Dark Mode</Text>
    </Flex>
  );
};

export default ColorModeSwitch;
