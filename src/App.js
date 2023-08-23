import React from "react";
import Nav from "./components/Nav";
import mtn from './components/mtn.jpg'
import cad from './components/cad.mov'
import Proj from "./components/Proj";
import {
  ChakraProvider,
  VStack,
  Heading,
  Box,
  HStack,
  Image,
} from "@chakra-ui/react";
import pfp from "./components/pfp.jpg";
import Paragraph from "./components/Paragraph";

const App = () => {

  return (
    <ChakraProvider>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <Nav />
      <Box
      bgColor="whitesmoke"
      color="#5e5855"
        py={10}
        mx="auto"
        maxWidth="2000px"
        paddingX={{ base: "0", md: "10%" }}
        paddingTop="150px"
      >
        <VStack align="flex-start" minWidth="400px" width="100%">
          <HStack
            borderBottom="2px"
            borderColor="#ab9e98"
            spacing={4}
            justifyContent="space-between"
            width="100%"
            paddingBottom="30px"
            marginBottom="70px"
            paddingRight="30px"
            cursor="pointer"
            transition="transform 0.3s ease, box-shadow 0.3s ease, border-radius .3s ease"
            _hover={{
              transform: "scale(1.05)",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              borderRadius: "100px",
            }}
          >
            <Heading
              alignSelf="flex-start"
              py="20px"
              px="20px"
              fontSize="100px"
            >
              Alison Ryan
            </Heading>
            <Image
              shadow="10px 10px 20px gray"
              src={pfp}
              alt="Profile"
              boxSize="150px"
              borderRadius="full"
              objectFit="cover"
            />
          </HStack>
          <Paragraph
          paddingBottom="3000px"
            heading="Hello!"
            body="My name's Alison Ryan and I'm a sophomore at Northeastern University 
            majoring in computer science and mathematics. I'm currently seeking software engineering
            internships for this coming Spring and Summer, and below you can check out some
            projects I've worked on in the past! I truly enjoy working on computer science endeavors
            not just for my love of coding, but also for my passion of creation. Some other things that I enjoy
            doing are playing tennis, running, exploring nature, and listening to music or playing various instruments."
            imgSrc={mtn}
            pad="100px"
          />
          <Paragraph
            heading="Check out some of the projects that I've worked on!"
            pad="50px"
          />
          <Proj 
          heading="Cadence matcher"
          body="This is a web app I made with Javascript, React.js, and the Spotify API so that a user can create a custom
          Spotify playlist that suits their running needs. It allows you to select your favorite playlists, and 
          your ideal running tempo and ideal levels of happiness, energy, and danceability for your given playlists, and then 
          creates a new playlist with the selected tracks that fit those criteria."
          vid={cad}
          git="https://github.com/AlisRyan/cadence-matcher"
          />
          <Proj 
          heading="Boxy"
          body="Worked on a team of 6 developers to create a scalable web-app for Northeastern 
          startup Boxy from scratch with Typescript, Next.js, PostgreSQL, Prisma, Docker, and Tailwind CSS. I helped implement a responsive front-end design and handle creating, verifying, 
          and deleting both users and reservations from the backend database."
          />
          <Proj 
          heading="Bullet Journal"
          body="Created a bullet journal using Java and JavaFX that takes in and displays user tasks and events for a week. These tasks and events can then be stored in a file, which can be reopened to display the saved data."
          git="https://github.com/AlisRyan/bullet-journal"
          />
          <Proj 
          heading="Personal Website"
          body="Created this static website to display some information about me and my projects using Javascript, React.js, and Chakra UI.
          "
          git="https://github.com/AlisRyan/alisryan.github.io"
          />
                    <Proj 
          heading="Battleship"
          body="Made a playable command-line game of battle salvo with Java that can be played with different sized boards and numbers of ships. Can be played either as single-player against an algorithm or multiplayer.
          "
          git="https://github.com/AlisRyan/battle-salvo"
          />
          <Proj 
          heading="Maze"
          body=
          "Created a program that randomly generates a maze which can then be solved with either breadth-first-search or depth-first search."
          />
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default App;
