import { BackgroundImage, Flex, Stack } from "@mantine/core";
import { Carousel } from '@mantine/carousel';
import { MainCard } from "features/cards";

function MainCardSlider() {
  return (
    <><Stack align="center">
      <h1 style={{ marginBottom: "0" }}>Shop our latest offers and categories</h1>
      <p style={{ width: "50%", marginTop: "0", textAlign: "center" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quam vero
        reiciendis ullam quaerat quia ea laudantium, voluptatum ratione.
        Dolore exercitationem dignissimos, ea facere obcaecati officia ab? Et,
        sit expedita!
      </p>
    </Stack><Carousel
      withIndicators
      height={700}
      slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
      slideGap={{ base: 0, sm: 'md' }}
      loop
      align="start"
    >
        <Carousel.Slide><MainCard /></Carousel.Slide>
        <Carousel.Slide><MainCard /></Carousel.Slide>
        <Carousel.Slide><MainCard /></Carousel.Slide>
        <Carousel.Slide><MainCard /></Carousel.Slide>
        <Carousel.Slide><MainCard /></Carousel.Slide>
        <Carousel.Slide><MainCard /></Carousel.Slide>
        <Carousel.Slide><MainCard /></Carousel.Slide>
        <Carousel.Slide><MainCard /></Carousel.Slide>
      </Carousel></>
  );
}

export default MainCardSlider;
