import { BackgroundImage, Flex, Stack, Title, Text } from "@mantine/core";

const MainGrid = () => {
  return (
    <Stack h="1000px">
      <Stack align="center">
        <Title style={{marginBottom:"0" }}>Shop our latest offers and categories</Title>
        <Text style={{ width: "50%", marginTop:"0", textAlign: "center" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quam vero
          reiciendis ullam quaerat quia ea laudantium, voluptatum ratione.
          Dolore exercitationem dignissimos, ea facere obcaecati officia ab? Et,
          sit expedita!
        </Text>
      </Stack>
      <Flex justify="center" px="10px">
        <Stack w="800px" h="700px" px="10px" align="end">
          <Stack h="400px" w="600px" style={{boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)'}} >
            <BackgroundImage
              h="300px"
              w="400px"
              ml="50px"
              src={"./IMAGE.png"}
            ></BackgroundImage>
            <Stack h="100px" m="0">
            <p style={{ display: "flex", justifyContent: "end", margin:"0 15px"}}>Laptop</p>
            <h2 style={{ display: "flex",textAlign:"right", justifyContent: "end", marginTop:"-20px", marginLeft:"405px" , width:"30%"}}>
              True Laptop Solution
            </h2>
            </Stack>
          </Stack>
          <Flex h="250px" w="600px" style={{boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)', marginTop:"60px"}}>
            <BackgroundImage
              h="250px"
            w="500px"
             ml="50px"
              src={"./STRAP.png"}
            ></BackgroundImage>
            <Stack>
              <p style={{ display: "flex", justifyContent: "end", marginTop:"60px", marginRight:"20px" }}>Laptop</p>
              <h1 style={{ display: "flex",  marginLeft:"60px", marginTop:"-40px", marginBottom:"-50px" }}>
                Not just stylisht
              </h1>
            </Stack>
          </Flex>
        </Stack>
        <Flex px="10px" w="800px" h="700px">
          <Stack h="650px"  w="300px" style={{boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)'}}>
            <Flex >
              <BackgroundImage
              mt="50px"
                h="400px"
                w="300px"
                src={"./PHONE.png"}
              ></BackgroundImage>
            </Flex>
            <Stack>
              <p style={{ display: "flex", margin:"0", justifyContent: "center" }}>Laptop</p>
              <h1 style={{ display: "flex",margin:"0", justifyContent: "center" }}>
                Not just stylisht
              </h1>
            </Stack>
          </Stack>
          <Stack h="650px" w="300px" ml="20px" pt="70px" style={{boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)'}}>
            <Stack>
              <p style={{ display: "flex", margin:"0",justifyContent: "center"}}>Laptop</p>
              <h1 style={{ display: "flex", margin:"0",justifyContent: "center" }}>
                Not just stylisht
              </h1>
            </Stack>
            <BackgroundImage
              h="400px"
                w="300px"
              src={"./SCREEN.png"}
            ></BackgroundImage>
          </Stack>
        </Flex>
      </Flex>
    </Stack>
  );
};

export default MainGrid;
