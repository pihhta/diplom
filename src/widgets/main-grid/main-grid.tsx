import { useRef } from "react";
import { BackgroundImage, Flex } from "@mantine/core";

const MainSlider = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <Flex px='100px'>
    <Carousel
      w="100%"
      
      style={{ borderRadius: "50px", overflow: "hidden" }}
      withIndicators
      height={900}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
    >
      <Carousel.Slide>
        <BackgroundImage
          h="100%"
          w="100%"
          src={"./background1.jpg"}
        ></BackgroundImage>
      </Carousel.Slide>
      <Carousel.Slide>
        <BackgroundImage
          style={{ borderRadius: "500px" }}
          h="100%"
          w="100%"
          src={"./background1.jpg"}
        ></BackgroundImage>
      </Carousel.Slide>
      <Carousel.Slide>
        <BackgroundImage
          style={{ borderRadius: "500px" }}
          h="100%"
          w="100%"
          src={"./background1.jpg"}
        ></BackgroundImage>
      </Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
    </Flex>
  );
};

export default MainSlider;
