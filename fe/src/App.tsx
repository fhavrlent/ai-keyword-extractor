import { Container, Box } from "@chakra-ui/react";

import { Header, Footer, TextInput } from "./components";

const App = () => {
  return (
    <Box bg="blue.600" color="white" height="100vh" paddingTop={130}>
      <Container maxW="3xl" centerContent>
        <Header />
        <TextInput />
        <Footer />
      </Container>
    </Box>
  );
};

export default App;
