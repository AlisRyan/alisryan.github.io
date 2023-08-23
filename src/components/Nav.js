import React from "react";
import { HStack, Link, Box } from "@chakra-ui/react";

const Nav = () => {
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="10"
      bg="whitesmoke"
      fontSize="25px"
      boxShadow="md"
      borderBottom="1px solid #ab9e98"
    >
      <HStack spacing={4} justifyContent="space-between" px="10%" py={4}>
        <Link
          href="https://github.com/AlisRyan"
          _hover={{
            transform: "scale(1.1)",
          }}
          class="fa fa-github"
          />
                  <Link
          href="https://www.linkedin.com/in/alison-ryan-98529a247/"
          _hover={{
            transform: "scale(1.1)",
          }}
          class="fa fa-linkedin"
          />
                            <Link
          href="https://docs.google.com/document/d/1aCgZgKof5ho9BWo8trpK9svpHQRCmS_J/edit"
          fontSize="20px"
          _hover={{
            transform: "scale(1.1)",
          }}
          > Resume </Link>
                            <Link
          href="mailto:ryan.alis@northeastern.edu"
          _hover={{
            transform: "scale(1.1)",
          }}
          class="fa fa-envelope"
          />
                            <Link
          href="https://www.instagram.com/alisonryan_/"
          _hover={{
            transform: "scale(1.1)",
          }}
          class="fa fa-instagram"
          />
      </HStack>
    </Box>
  );
};

export default Nav;
