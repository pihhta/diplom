import { Button, Flex, Image, Stack } from "@mantine/core";
import { MainSlider } from "widgets";
import { Footer } from "widgets/footer";
import Header from "widgets/header/header";
import MainCardSlider from "widgets/main-card-slider/main-card-slider";
import { MainGrid } from "widgets/main-grid";



const Main = () => {
  return <Stack style={{overflowX:"hidden"}}>
    <Header/>
    <MainSlider/>
    <MainGrid/>
    <MainCardSlider/>
    <Footer/>
     </Stack>;
};

export default Main;
