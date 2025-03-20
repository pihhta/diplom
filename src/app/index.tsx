import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import { RouterProvider } from "react-router";
import { router } from "./router/router";
import '@mantine/carousel/styles.css';

const theme = createTheme({
 
});

const Index = () => {
  return (
    <MantineProvider theme={theme}>
      <RouterProvider router={router} />
    </MantineProvider>
  );
};

export default Index;
