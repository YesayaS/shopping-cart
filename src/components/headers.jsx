import { Flex, Box } from "@chakra-ui/react";
import { Tabs, TabList, Tab, TabIndicator } from "@chakra-ui/react";

const Headers = () => {
  return (
    <Flex
      justifyContent="space-between"
      align="center"
      py={4}
      px={6}
      border="1px"
    >
      <Box>logo</Box>
      <Tabs position="relative" variant="unstyled">
        <TabList>
          <Tab value="home">home</Tab>
          <Tab value="shop">shop</Tab>
          <Tab value="about-us">about us</Tab>
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="blackAlpha.900"
          borderRadius="1px"
        />
      </Tabs>
      <Box>cart</Box>
    </Flex>
  );
};

export { Headers };
