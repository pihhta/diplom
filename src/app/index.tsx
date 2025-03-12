import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import { RouterProvider } from "react-router";
import { router } from "./router/router";

const theme = createTheme({
  /** Put your mantine theme override here */
});

const Index = () => {
  return (
    <MantineProvider theme={theme}>
      <RouterProvider router={router} />
    </MantineProvider>
  );
};

export default Index;
