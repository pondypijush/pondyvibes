import React from 'react';
import { Box, Flex, Heading, Text, Image, Stack, Button, useColorMode } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const { colorMode } = useColorMode();
  const textColor = { light: 'white', dark: 'gray.800' };

  return (
    <Box
      bg="linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))"
      p={4}
      position="fixed"
      width="100%"
      zIndex="1000"
      backdropFilter="blur(10px)"
    >
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
        <Heading as="h1" size="lg" color={textColor[colorMode]}>
          Pondicherry Stays
        </Heading>
        <Flex gap={4}>
          <Link to="/explore">
            <Text color={textColor[colorMode]} fontSize="lg" _hover={{ color: 'teal.400' }}>
              Explore
            </Text>
          </Link>
          <Link to="/contact">
            <Text color={textColor[colorMode]} fontSize="lg" _hover={{ color: 'teal.400' }}>
              Contact
            </Text>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

const HeroSection: React.FC = () => (
  <Flex
    height="100vh"
    align="center"
    justify="center"
    bgImage="url('https://images.unsplash.com/photo-1597073642928-48c0971f7ded?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
    bgSize="cover"
    bgPosition="center"
    color="white"
    textAlign="center"
  >
    <Box p={8} bg="rgba(0, 0, 0, 0.)" borderRadius="md" boxShadow="lg">
      <Heading as="h1" size="3xl" mb={6} textShadow="2px 2px 8px rgba(0, 0, 0, 0.8)">
        Discover the Magic of Pondicherry
      </Heading>
      <Text fontSize="xl" mb={6} textShadow="2px 2px 8px rgba(0, 0, 0, 0.8)">
        Where history, culture, and the sea meet.
      </Text>
      <Link to="/explore">
        <Button size="lg" colorScheme="teal">
          Start Your Journey
        </Button>
      </Link>
    </Box>
  </Flex>
);

const Section: React.FC<{ image: string; text: string; reverse?: boolean }> = ({
  image,
  text,
  reverse = false,
}) => {
  const { colorMode } = useColorMode();
  const textColor = { light: 'gray.800', dark: 'white' };
  const bgColor = { light: 'white', dark: 'gray.700' };

  return (
    <Flex
      direction={reverse ? 'row-reverse' : 'row'}
      align="center"
      justify="space-between"
      p={8}
      maxW="1200px"
      mx="auto"
      bg={bgColor[colorMode]}
      borderRadius="lg"
      boxShadow="lg"
      my={8}
      overflow="hidden"
    >
      <Box flex="1">
        <Image src={image} alt="Pondicherry" borderRadius="md" boxShadow="md" />
      </Box>
      <Box flex="1" p={8}>
        <Text fontSize="xl" color={textColor[colorMode]}>
          {text}
        </Text>
      </Box>
    </Flex>
  );
};

const Footer: React.FC = () => (
  <Box bg="gray.100" p={4} mt={16}>
    <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
      <Text color="gray.600">© 2024 Pondicherry Stays. All rights reserved.</Text>
      <Flex gap={4}>
        <Link to="/privacy">
          <Text color="gray.600" _hover={{ color: 'teal.500' }}>
            Privacy Policy
          </Text>
        </Link>
        <Link to="/terms">
          <Text color="gray.600" _hover={{ color: 'teal.500' }}>
            Terms of Service
          </Text>
        </Link>
      </Flex>
    </Flex>
  </Box>
);

const Homepage: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Stack spacing={16} mt={-24} bg="white">
        <Section
          image="https://images.unsplash.com/photo-1662572594228-3aca8503b782?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          text="Explore the charming French Quarter, with its quaint streets and colorful buildings."
        />
        <Section
          image="https://images.unsplash.com/photo-1709969623540-fa2d8603eef7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          text="Relax on the golden beaches and enjoy the calm waves of the Bay of Bengal."
          reverse
        />
        <Section
          image="http://tanto.in/wp-content/uploads/2017/08/1.jpg"
          text="Indulge in the authentic French cuisine, a delightful blend of French flavors."
        />
        <Section
          image="https://images.unsplash.com/photo-1598792598750-1f0dc619e6a2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          text="Visit Auroville, the capital of the State of Pondicherry, with its stunning architecture and culture."
          reverse
        />
      </Stack>
      <Footer />
    </>
  );
};

export default Homepage;