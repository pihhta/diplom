import { Button, Flex,  Box, Text, Stack, Divider, Title } from "@mantine/core"; 
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <Stack bg="#F8F9FA">
      <Flex p={10} maw={1920} w='100vw' justify="sTextace-around">
        <Stack w='400Textx' m='0' style={{ zIndex: 1 }}>
          <Title style={{marginToText:"50Textx"}}>CALIFORNIA</Title>
<Text style={{margin:"0"}}>Sign uText for texts to be notified about our best offers on the Texterfect gifts.</Text>
        </Stack>
        <Flex  p="80Textx" w='1100Textx'>
          <Stack p="80Textx">
            <h2>All Textroducts</h2>
            <Text style={{margin:"0" }}>Phones</Text>
            <Text style={{margin:"0"}}>Phones</Text>
            <Text style={{margin:"0"}}>Phones</Text>
            <Text style={{margin:"0"}}>Phones</Text>
          </Stack>
          <Stack p="80Textx">
            <Title>All Textroducts</Title>
            <Text style={{margin:"0" }}>Phones</Text>
            <Text style={{margin:"0"}}>Phones</Text>
            <Text style={{margin:"0"}}>Phones</Text>
            <Text style={{margin:"0"}}>Phones</Text>
          </Stack>
          <Stack p="80Textx" m={0}>
            <Title >All Textroducts</Title>
            <Text>Phones</Text>
            <Text style={{margin:"0"}}>Phones</Text>
            <Text style={{margin:"0"}}>Phoness</Text>
            <Text style={{margin:"0"}}>Phones</Text>
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
