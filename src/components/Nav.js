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
      bg="white"
      fontSize="25px"
      boxShadow="xl"
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
          
        {/* <HStack spacing={10}>
          <Link
            transition="transform 0.3s, box-shadow 0.3s ease"
            _hover={{
              transform: "scale(1.1)",
            }}
          >
            My Listings
          </Link>
          <HStack bgColor="#f8f8f8" px="15px" borderRadius="20px">
            <Hamburger />
            <Link
              fontSize="5px"
              textShadow="0px 0px 2px black"
              color="#f8f8f8"
              borderRadius="10px"
              transition="transform 0.3s, box-shadow 0.3s ease"
              _hover={{
                transform: "scale(1.1)",
                shadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div class="user-icon">
                <span class="green"></span>
              </div>{" "}
            </Link>
          </HStack>
        </HStack> */}
      </HStack>
    </Box>
  );
};

export default Nav;
