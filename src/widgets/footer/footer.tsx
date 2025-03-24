import { Button, Flex,  Box, Text, Stack } from "@mantine/core"; 
import { Fullscreen, Search, ShoppingCart } from "lucide-react";

const Footer = () => {
  return (
    
     
      <Flex px={10} maw={1920} w='100vw' justify="space-around" bg="grey">
        <Stack w='400px' style={{ zIndex: 1 }}>
          <h1>CALIFORNIA</h1>
<p>Sign up for texts to be notified about our best offers on the perfect gifts.</p>
        </Stack>
        <Flex  px="80px" w='1100px'>
          <Stack px="80px">
            <h2>All products</h2>
            <p>Phones</p>
            <p>Phones</p>
            <p>Phones</p>
            <p>Phones</p>
          </Stack>
          <Stack px="80px">
            <h2>All products</h2>
            <p>Phones</p>
            <p>Phones</p>
            <p>Phones</p>
            <p>Phones</p>
          </Stack>
          <Stack px="80px">
            <h2>All products</h2>
            <p>Phones</p>
            <p>Phones</p>
            <p>Phones</p>
            <p>Phones</p>
          </Stack>
          <Stack px="80px">
            <h2>All products</h2>
            <p>Phones</p>
            <p>Phones</p>
            <p>Phones</p>
            <p>Phones</p>
          </Stack>
        </Flex>

      </Flex>

     
 
  
  );
};
export default Footer;
