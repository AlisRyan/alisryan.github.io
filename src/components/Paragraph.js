import React from "react";
import { Heading, Image, Text, HStack, VStack, Box } from "@chakra-ui/react";

const Paragraph = ({ heading, body, imgSrc, pad }) => {
  return (
    <Box
      as={HStack}
      spacing={4}
      alignItems="flex-start"
      width="100%"
      paddingBottom={pad}
    >
      <VStack align="flex-start" flex="1">
        <Heading fontSize="3xl" paddingY="20px">
          {heading}
        </Heading>
        <Text>{body}</Text>
      </VStack>
      {imgSrc && (
        <Image
          src={imgSrc}
          alt="Image"
          boxSize="25%"
          borderRadius="20%"
          objectFit="cover"
          transition="transform 0.3s ease, box-shadow 0.3s ease"
          _hover={{
            transform: "scale(1.1)",
            boxShadow: "4px 4px 6px 6px rgba(0, 0, 0, .1)",
          }}
        />
      )}
    </Box>
  );
};

export default Paragraph;
