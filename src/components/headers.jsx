import { Flex, Box, Tabs } from "@radix-ui/themes";

const Headers = () => {
  return (
    <Flex
      justify="between"
      align="center"
      p="4"
      px="6"
      style={{ border: "black 1px solid" }}
    >
      <Box>logo</Box>
      <Tabs.Root defaultValue="home">
        <Tabs.List>
          <Tabs.Trigger value="home">home</Tabs.Trigger>
          <Tabs.Trigger value="shop">shop</Tabs.Trigger>
          <Tabs.Trigger value="about-us">about us</Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>
      <Box>cart</Box>
    </Flex>
  );
};

export { Headers };
