import { Button, Flex, Image, Stack } from "@mantine/core";
import { Footer } from "widgets/footer";
import Header from "widgets/header/header";
import MainCardSlider from "widgets/main-card-slider/main-card-slider";
import { MainGrid } from "widgets/main-grid";
import { MainSlider } from "widgets/main-slider";


const Main = () => {
  return <Stack>
    <Header/>
    <MainSlider/>
    <MainGrid/>
    <MainCardSlider/>
    <Footer/>
     </Stack>;
};

export default Main;
