import { Card, Image, Text } from '@mantine/core';

function MainCard()  {
  return  <Card

  p={{ lg:"xl", sm:"xs"}}
  component="a"
  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  target="_blank"
  w={{ lg:"500px", sm:"300px"}}
  ml={{ lg:"60px", sm:"50px"}}

>
  <Card.Section>
    <Image
      src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
      h={{ lg:"300px", sm:"200px"}}
      alt="No way!"
    />
  </Card.Section>

  <h1 className="mantine-hidden-from-sm">
    You&apos;ve won a million dollars in cash!
  </h1>
  <h3 className="mantine-hidden-from-xl">
    You&apos;ve won a million dollars in cash!
  </h3>

  <Text mt="xs" c="dimmed" size="md">
    Please click anywhere on this card to claim your reward, this is not a fraud, trust us
  </Text>

<h2>$100</h2>

</Card>

}
export default MainCard;
