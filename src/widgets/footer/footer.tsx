import { Button, Flex,  Box, Text, Stack, Divider } from "@mantine/core"; 
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <Stack bg="#F8F9FA">
      <Flex px={10} maw={1920} w='100vw' justify="space-around">
        <Stack w='400px' m='0' style={{ zIndex: 1 }}>
          <h1 style={{marginTop:"50px"}}>CALIFORNIA</h1>
<p style={{margin:"0"}}>Sign up for texts to be notified about our best offers on the perfect gifts.</p>
        </Stack>
        <Flex  px="80px" w='1100px'>
          <Stack px="80px">
            <h2>All products</h2>
            <p style={{margin:"0" }}>Phones</p>
            <p style={{margin:"0"}}>Phones</p>
            <p style={{margin:"0"}}>Phones</p>
            <p style={{margin:"0"}}>Phones</p>
          </Stack>
          <Stack px="80px">
            <h2>All products</h2>
            <p style={{margin:"0" }}>Phones</p>
            <p style={{margin:"0"}}>Phones</p>
            <p style={{margin:"0"}}>Phones</p>
            <p style={{margin:"0"}}>Phones</p>
          </Stack>
          <Stack px="80px" m={0}>
            <h2 >All products</h2>
            <p style={{margin:"0" }}>Phones</p>
            <p style={{margin:"0"}}>Phones</p>
            <p style={{margin:"0"}}>Phones</p>
            <p style={{margin:"0"}}>Phones</p>
          </Stack>
          
        </Flex>

      </Flex >
      <Stack m="0 100px 0 100px">
      <Divider my="xs" />
<Flex  justify='space-between' align={'center'} > <Flex  align={'center'}><h3>Made by:&nbsp; </h3><Text> Azwedo</Text><ArrowUpRight /></Flex> <Flex  align={'center'}><h3>Powered by:&nbsp; </h3><Text> Webflow</Text><ArrowUpRight /></Flex></Flex>
  </Stack>   </Stack>
 
  
  );
};
export default Footer;
