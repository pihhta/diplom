import { Button, Flex,  Box, Text } from "@mantine/core"; 
import { Fullscreen, Search, ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    
     
      <Flex px={100} maw={1920} w='100vw' justify="space-between">
        <Box w='200px' style={{ zIndex: 1 }}>
          <img src="ssilka" />
        </Box>
        <Flex  style={{ zIndex: 1 }} gap="20px">
          <Button c="black" variant="transparent">
            Каталог
          </Button>
          <Button c="black" variant="transparent">
            Каталог
          </Button>
          <Button c="black" variant="transparent">
            Каталог
          </Button>
          <Button c="black" variant="transparent">
            Каталог
          </Button>
        </Flex>

        <Flex w='200px'  align={'center'} style={{ zIndex: 1 }}>
          <Button c="black" variant="transparent">
            EN
          </Button>{" "}
          <span>|</span>{" "}
          <Button c="black" variant="transparent">
            RU
          </Button>
          
         <Flex m={5}> <Search /></Flex>
         <Flex m={5}>   <ShoppingCart /> </Flex>
        </Flex>
     
      </Flex>

     
 
  
  );
};
export default Header;
