import { BackgroundImage, Flex, Stack, Text, Title } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { MainCard } from "features/cards";

function MainCardSlider() {
  return (
    <Stack h={{lg:"950px"}}>
      <Stack align="center" >
      
        <Title
          className="mantine-visible-from-lg"
          order={1}
          style={{ marginBottom: "0" }}
        >
          Shop our latest offers and categories
        </Title>
        <Title
          ta="center"
          className="mantine-hidden-from-lg"
          order={3}
          style={{ marginBottom: "0" }}
        >
          Shop our latest offers and categories
        </Title>
        <Text
          w={{ lg: "50%", sm: "70%" , base:"90%"}}
          style={{ marginTop: "0", textAlign: "center" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quam vero
          reiciendis ullam quaerat quia ea laudantium, voluptatum ratione.
          Dolore exercitationem dignissimos, ea facere obcaecati officia ab? Et,
          sit expedita!
        </Text>
      </Stack>
      <Carousel
        mt={{lg:"70px", sm:"10px"}}
        withIndicators
        h={{ lg: "700px", sm: "450px" }}
        slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
        slideGap={{ base: 0, sm: "md" }}
        loop
        align="start"
      >
        <Carousel.Slide>
          <MainCard />
        </Carousel.Slide>
        <Carousel.Slide>
          <MainCard />
        </Carousel.Slide>
        <Carousel.Slide>
          <MainCard />
        </Carousel.Slide>
        <Carousel.Slide>
          <MainCard />
        </Carousel.Slide>
        <Carousel.Slide>
          <MainCard />
        </Carousel.Slide>
        <Carousel.Slide>
          <MainCard />
        </Carousel.Slide>
        <Carousel.Slide>
          <MainCard />
        </Carousel.Slide>
        <Carousel.Slide>
          <MainCard />
        </Carousel.Slide>
      </Carousel>
    </Stack>
  );
}

export default MainCardSlider;
