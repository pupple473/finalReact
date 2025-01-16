import { Flex } from "@chakra-ui/react";

export const Layout = ({ children }) => {
  return (
    <Flex flexDirection={"column"} minHeight={"100vh"}>
      {children}
    </Flex>
  );
};