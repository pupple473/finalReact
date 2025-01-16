import { Link } from "react-router-dom";
import logoByGemini from '../../assets/logoByGemini.webp'

import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, ChevronDownIcon } from "@chakra-ui/icons";

import { useGetAllCategories } from "../../hooks/useGetAllCategories";

import { CartWidget } from "../index";

export const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const { Categorie } = useGetAllCategories();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Link to="/">Store</Link>
          </Box>

          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              <Categorie></Categorie>
            </MenuButton>
            <MenuList height={"300px"} overflowY={"scroll"}>
              {categorie.map((categorie) => {
                return (
                  <MenuItem key={categorie.slug}>
                    <Link to={`/category/${categorie.slug}`}>
                      {categorie.name}
                    </Link>
                  </MenuItem>
                );
              })}
            </MenuList>
          </Menu>

          <Flex alignItems={"center"}>
            <CartWidget />
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={logoByGemini}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={logoByGemini}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
