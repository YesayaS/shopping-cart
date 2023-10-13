import { Flex, Box, Heading, Button, AspectRatio } from "@radix-ui/themes";
import { Headers } from "../components/headers";

const Home = () => {
  return (
    <>
      <Headers />
      <Flex position="relative">
        <AspectRatio ratio={16 / 9}>
          <img
            src="https://images.pexels.com/photos/6311544/pexels-photo-6311544.jpeg"
            alt=""
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
        </AspectRatio>
        <Flex direction="column" position="absolute">
          <Box>
            <Heading>Lorem Ipsum</Heading>
          </Box>
          <Button size="4" color="gray-12" highContrast>
            Shop Now
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export { Home };
