import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import { Routes, Route, Link} from "react-router-dom";


const theme = createTheme({
  /** Put your mantine theme override here */
});

const Index = () => {
  return (
    <MantineProvider theme={theme}>
    <div>
      <h1>about</h1>
    </div>
    </MantineProvider>
  );
};

export default Index;
