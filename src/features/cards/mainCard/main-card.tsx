import { Card, Image, Text } from '@mantine/core';

function MainCard()  {
  return  <Card

  padding="xl"
  component="a"
  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  target="_blank"
  w={500}
  ml={60}

>
  <Card.Section>
    <Image
      src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
      h={300}
      alt="No way!"
    />
  </Card.Section>

  <h1 >
    You&apos;ve won a million dollars in cash!
  </h1>

  <Text mt="xs" c="dimmed" size="md">
    Please click anywhere on this card to claim your reward, this is not a fraud, trust us
  </Text>

<h2>$100</h2>

</Card>

}
export default MainCard;
