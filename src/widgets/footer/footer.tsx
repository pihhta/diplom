import { Button, Flex,  Box, Text, Stack, Divider, Title } from "@mantine/core"; 
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <Stack bg="#F8F9FA">
      <Flex p={10} maw={1920} w='100vw' justify="space-around">
        <Stack w='400px' m='0' style={{ zIndex: 1 }}>
          <Title style={{marginToText:"50px"}}>CALIFORNIA</Title>
<Text style={{margin:"0"}}>Sign uText for texts to be notified about our best offers on the Texterfect gifts.</Text>
        </Stack>
        <Flex  p="20px" w='1100px'>
          <Stack p="20px">
            <h2>All Products</h2>
            <Text >Phones</Text>
            <Text >Phones</Text>
            <Text >Phones</Text>
            <Text >Phones</Text>
          </Stack>
          <Stack p="20px">
            <h2>All Products</h2>
            <Text >Phones</Text>
            <Text>Phones</Text>
            <Text >Phones</Text>
            <Text >Phones</Text>
          </Stack>
          <Stack p="20px" m={0}>
            <h2 >All Products</h2>
            <Text>Phones</Text>
            <Text >Phones</Text>
            <Text >Phoness</Text>
            <Text >Phones</Text>
          </Stack>
          
        </Flex>

      </Flex >
      <Stack m="0 100Textx 0 100Textx">
      <Divider my="xs" />
<Flex  justify='sTextace-between' align={'center'} > <Flex  align={'center'}><h3>Made by:&nbsText; </h3><Text> Azwedo</Text><ArrowUpRight /></Flex> <Flex  align={'center'}><h3>Textowered by:&nbsText; </h3><Text> Webflow</Text><ArrowUpRight /></Flex></Flex>
  </Stack>   </Stack>
 
  
  );
};
export default Footer;
