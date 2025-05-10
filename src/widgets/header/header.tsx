import {
  Button,
  Flex,
  Box,
  Text,
  Burger,
  VisuallyHidden,
  Drawer,
} from "@mantine/core";
import { Fullscreen, Search, ShoppingCart } from "lucide-react";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { Link } from 'react-router-dom';

const Header = () => {
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";

  return (
    <>
      {/* Desktop version */}
      <Flex
        className="mantine-visible-from-sm"
        px={{ base: 20, sm: 50, md: 100 }}
        maw={1920}
        w="100%"
        justify="space-between"
        align="center"
        h={80}
      >
        <Box w={{ base: 150, md: 200 }} style={{ zIndex: 1 }}>
          <img
            src="ssilka"
            alt="Logo"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>

        <Flex style={{ zIndex: 1 }} gap={{ base: 10, md: 20 }}>
          <Link to="/about">
          <Button  c="black" variant="transparent">
            Каталог
          </Button>
          </Link>
          <Button c="black" variant="transparent">
            О нас
          </Button>
          <Button c="black" variant="transparent">
            Контакты
          </Button>
          <Button c="black" variant="transparent">
            Доставка
          </Button>
        </Flex>

        <Flex
          w={{ base: 150, md: 200 }}
          align="center"
          justify="flex-end"
          style={{ zIndex: 1 }}
        >
          <Button c="black" variant="transparent" p="10px" size="md">
            EN
          </Button>
          <span>|</span>
          <Button c="black" variant="transparent" p="10px" size="sm">
            RU
          </Button>
          <Flex ml={5}>
            <Search size={20} />
          </Flex>
          <Flex ml={5}>
            <ShoppingCart size={20} />
          </Flex>
        </Flex>
      </Flex>

      {/* Mobile version */}
      <Flex
        className="mantine-hidden-from-sm"
        px={20}
        justify="space-between"
        align="center"
        h={60}
        style={{ zIndex: 1 }}
      >
        <Burger
          opened={opened}
          onClick={() => setOpened((o) => !o)}
          title={title}
          size="sm"
        />

        <Box w={100} style={{ zIndex: 1 }}>
          <img
            src="ssilka"
            alt="Logo"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>

        <Flex align="center" gap={10}>
          <Search size={20} />
          <ShoppingCart size={20} />
        </Flex>
      </Flex>

      {/* Mobile menu drawer */}
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Меню"
        padding="xl"
        size="sm"
        zIndex={1000}
      >
        <Flex direction="column" gap="md">
          <Button fullWidth variant="light" color="grey">
            Каталог
          </Button>
          <Button fullWidth variant="light" color="grey">
            О нас
          </Button>
          <Button fullWidth variant="light" color="grey">
            Контакты
          </Button>
          <Button fullWidth variant="light" color="grey">
            Доставка
          </Button>

          <Flex justify="center" mt="md" gap="sm">
            <Button c="black" variant="subtle" size="xs">
              EN
            </Button>
            <span>|</span>
            <Button c="black" variant="subtle" size="xs">
              RU
            </Button>
          </Flex>
        </Flex>
      </Drawer>
    </>
  );
};

export default Header;
