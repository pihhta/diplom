import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import { BackgroundImage, Flex } from "@mantine/core";
import classes from './main-slidser.module.css'

const MainSlider = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <Flex px={{lg:'100px', sm:"50px", base:"10px"}}>
    <Carousel
      w="100%"
  className={classes.carousel}
      style={{borderRadius: "50px", overflow: "hidden" }}
      withIndicators
      height="900px"
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
    >
      <Carousel.Slide>
        <BackgroundImage
        p="20px"
           style={{ borderRadius: "50px" }}
          h={{ base:"40%",lg:"100%", sm:"70%", xs:"50%"}}
          w="100%"
          src={"./background1.jpg"}
        ></BackgroundImage>
      </Carousel.Slide>
      <Carousel.Slide>
        <BackgroundImage
           p="20px"
          style={{ borderRadius: "50px" }}
          h={{ base:"40%",lg:"100%", sm:"70%", xs:"50%"}}
          w="100%"
          src={"./background1.jpg"}
        ></BackgroundImage>
      </Carousel.Slide>
      <Carousel.Slide>
        <BackgroundImage
           p="20px"
          style={{ borderRadius: "50px" }}
          h={{ base:"40%",lg:"100%", sm:"70%", xs:"50%"}}
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
