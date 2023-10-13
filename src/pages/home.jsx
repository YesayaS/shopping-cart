import { Flex, Box, Image, Text, Button } from "@chakra-ui/react";

import { Headers } from "../components/headers";

const Home = () => {
  return (
    <>
      <Headers />

      <Box position="relative" w="100%" aspectRatio={16 / 8}>
        <Image
          objectFit="cover"
          src="https://images.pexels.com/photos/6311544/pexels-photo-6311544.jpeg"
          alt="Your Image"
          w="100%"
          h="100%"
        />
        <Box
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bg="rgba(0, 0, 0, 0.5)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          pl="4rem"
          gap={4}
        >
          <Text color="white" fontSize="5xl">
            Endless <br /> Shopping Possibilities!
          </Text>
          <Button w="150px" px={9}>
            Shop
          </Button>
        </Box>
      </Box>
    </>
  );
};

export { Home };
