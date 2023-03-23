import { useState } from "react";
import { Textarea, Button, useToast } from "@chakra-ui/react";

export const TextInput = () => {
  const [text, setText] = useState("");

  const toast = useToast();

  const submitText = () => {
    if (text === "") {
      toast({
        title: "Error",
        description: "Please enter some text",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    console.log(text);
  };

  return (
    <>
      <Textarea
        bg="blue.400"
        color="white"
        padding={4}
        marginTop={6}
        height={200}
        value={text}
        onChange={(event) => setText(event.currentTarget.value)}
      />
      <Button
        bg="blue.500"
        color="white"
        marginTop={4}
        width="100%"
        _hover={{ bg: "blue.700" }}
        onClick={submitText}
      >
        Extract
      </Button>
    </>
  );
};
