import '@mantine/core/styles.css';

import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  /** Put your mantine theme override here */
});

const Index = () => {
  return (
    <MantineProvider theme={theme}>
    <div>
      <h1>APP</h1>
    </div>
    </MantineProvider>
  );
};

export default Index;
