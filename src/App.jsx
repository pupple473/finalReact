import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "./layouts";
import { PublicRouter } from "./router";
import { CartProvider } from "./context";

function App() {
  return (
    <CartProvider>
      <ChakraProvider>
        <Layout>
          <PublicRouter />
        </Layout>
      </ChakraProvider>
    </CartProvider>
  );
}

export default App;
