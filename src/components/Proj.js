import React from "react";
import { VStack, Box, Text, HStack, Link } from "@chakra-ui/react";

const Proj = ({ heading, body, vid, git, fit }) => {

  return (
    <VStack
      align="left"
      justify="space-between"
      p="4"
      bg="white"
      border="1px solid #ab9e98"
      borderRadius="20px"
      mb="4"
      transition="transform 0.3s, box-shadow 0.3s"
      width="100%"
      _hover={{
        transform: "scale(1.05)",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Text fontWeight="bold" px="20px" fontSize="xl">
        {heading}
      </Text>
      <HStack>
        <VStack display="flex" alignItems="left" flex={fit}>
          <Text
            fontSize="sm"
            borderRadius="md"
            px="20px"
            py="5px"
            fontWeight="500"
          >
            {body}
          </Text>
          {git && (
            <Box fontSize="20px" px="20px">
              <Link href={git} className="fa fa-github" />
            </Box>
          )}
        </VStack>
        {vid && (
          <div style={{ flex: "1" }}>
            <video autoPlay loop controls muted>
              <source src={vid} />
            </video>
          </div>
        )}
      </HStack>
    </VStack>
  );
};

export default Proj;
