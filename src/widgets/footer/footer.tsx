import { Button, Flex, Box, Text, Stack, Divider, Title } from "@mantine/core";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <>
      <Stack bg="#F8F9FA" className="mantine-visible-from-sm">
        <Flex
          p="10px"
          maw="1920px"
          w={{ lg: "100vw", sm: "700px" }}
          justify="space-around"
        >
          <Stack
            w={{ lg: "400px", sm: "200px" }}
            mt={{ lg: "60px", sm: "20px" }}
            style={{ zIndex: 1 }}
          >
            <Title style={{ marginToText: "50px" }}>CALIFORNIA</Title>
            <Text >
              Sign up for texts to be notified about our best offers on the
              perfect gifts.
            </Text>
          </Stack>
          <Flex p={{ lg: "20px", sm: "0px" }} w={{ lg: "1100px", sm: "300px" }}>
            <Stack p="20px">
              <h2>All Products</h2>
              <Text>Phones</Text>
              <Text>Phones</Text>
              <Text>Phones</Text>
              <Text>Phones</Text>
            </Stack>
            <Stack p="20px">
              <h2>All Products</h2>
              <Text>Phones</Text>
              <Text>Phones</Text>
              <Text>Phones</Text>
              <Text>Phones</Text>
            </Stack>
            <Stack p="20px" m={0}>
              <h2>All Products</h2>
              <Text>Phones</Text>
              <Text>Phones</Text>
              <Text>Phones</Text>
              <Text>Phones</Text>
            </Stack>
          </Flex>
        </Flex>

        <Stack m="0 100px 0 100px">
          <Divider my="xs" />
          <Flex justify="space-between" align="center">
            <Flex align="center">
              <h3>Made by:&nbsp; </h3>
              <Text> Azwedo</Text>
              <ArrowUpRight />
            </Flex>
            <Flex align="center">
              <h3>Textowered by:&nbsp; </h3>
              <Text> Webflow</Text>
              <ArrowUpRight />
            </Flex>
          </Flex>
        </Stack>
      </Stack>
      <Stack bg="#F8F9FA" className="mantine-hidden-from-sm" justify="center">
        <Stack
          align="center"
          w={{ base: "350px" }}
        justify="center"
          style={{ zIndex: 1 }}
        >
          <Title style={{ marginToText: "50px" }}>CALIFORNIA</Title>
          <Text ta="justify" w="80%" >
            Sign up for texts to be notified about our best offers on the
            perfect gifts.
          </Text>
          <Flex p={{ lg: "20px", sm: "10px", base:"10px"}} gap="lg" justify="center">
            <Stack p="10px" ta="center">
              <Title order={3}>All Products</Title>
              <Text>Phones</Text>
              <Text>Phones</Text>
              <Text>Phones</Text>
              <Text>Phones</Text>
            </Stack>
            <Stack p="10px" ta="center">
            <Title order={3}>All Products</Title>
              <Text>Phones</Text>
              <Text>Phones</Text>
              <Text>Phones</Text>
              <Text>Phones</Text>
            </Stack>
            <Stack p="10px"  ta="center">
            <Title order={3} >All Products</Title>
              <Text>Phones</Text>
              <Text>Phones</Text>
              <Text>Phones</Text>
              <Text>Phones</Text>
            </Stack>
          </Flex>
        </Stack>
        <Stack m="0 10px 0 10px">
          <Divider my="xs" />
          <Flex justify="space-between" align={"center"}>
            <Flex align="center">
              <Title w="100%" order={5}>Made by:&nbsp; </Title>
              <Text> Azwedo</Text>
              <ArrowUpRight />
            </Flex>
            <Flex align="center">
            <Title w="100%" order={5}>Textowered by:&nbsp; </Title>
              <Text> Webflow</Text>
              <ArrowUpRight />
            </Flex>
          </Flex>
        </Stack>
      </Stack>
    </>
  );
};
export default Footer;
