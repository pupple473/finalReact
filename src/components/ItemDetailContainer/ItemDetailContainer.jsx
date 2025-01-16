import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { MdLocalShipping } from "react-icons/md";
import { CartContext } from "../../context";

export const ItemDetailContainer = ({ product }) => {
  const [count, setCount] = useState(0);
  const { addItem, removeItem } = useContext(CartContext);

  const handleRemoveProduct = () => {
    setCount(count - 1);
    removeItem(product)
  };

  const handleAddProduct = () => {
    setCount(count + 1);
    addItem(product);
  };

  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={product.images[0]}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {product.title}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              ${product.price} USD
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text fontSize={"lg"}>{product.description}</Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Product Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Warranty:
                  </Text>{" "}
                  {product.warrantyInformation}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Shipping Information:
                  </Text>{" "}
                  {product.shippingInformation}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Return policy:
                  </Text>{" "}
                  {product.returnPolicy}
                </ListItem>
              </List>
            </Box>
          </Stack>

          <Flex
            alignItems={"center"}
            width={"200px"}
            justifyContent={"space-around"}
          >
            <Button onClick={handleRemoveProduct}>-</Button>
            <Text>{count}</Text>
            <Button onClick={handleAddProduct}>+</Button>
          </Flex>

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>{product.shippingInformation}</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};
