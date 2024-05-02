import { Box, Flex, Heading, Text, Button, Image, VStack, HStack, Link, Icon } from '@chakra-ui/react';
import { FaCheckCircle, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Flex direction="column" align="center" justify="center" bgImage="url('/hero-background.jpg')" bgSize="cover" bgPosition="center" h="100vh">
        <Heading color="white" fontSize="4xl" p={4}>Innovative SaaS Solutions</Heading>
        <Text color="white" fontSize="xl" p={2}>Empower your business with our cutting-edge technology.</Text>
        <Button colorScheme="teal" size="lg" mt={4}>Get Started</Button>
      </Flex>

      {/* Features Overview */}
      <VStack spacing={8} p={8}>
        <Heading>Key Features</Heading>
        <Flex wrap="wrap" justify="center">
          <FeatureCard icon={FaCheckCircle} title="Feature 1" description="Description of feature 1" />
          <FeatureCard icon={FaCheckCircle} title="Feature 2" description="Description of feature 2" />
          <FeatureCard icon={FaCheckCircle} title="Feature 3" description="Description of feature 3" />
        </Flex>
      </VStack>

      {/* Benefits Section */}
      <Box bg="gray.100" p={8}>
        <Heading textAlign="center">Benefits</Heading>
        <Text p={4}>Benefit 1: Description of benefit 1</Text>
        <Text p={4}>Benefit 2: Description of benefit 2</Text>
        <Text p={4}>Benefit 3: Description of benefit 3</Text>
      </Box>

      {/* Pricing Plans */}
      <VStack spacing={8} p={8}>
        <Heading>Pricing Plans</Heading>
        <HStack spacing={10}>
          <PricingPlan plan="Basic" price="$9/month" features={["Feature 1", "Feature 2"]} />
          <PricingPlan plan="Pro" price="$29/month" features={["Feature 1", "Feature 2", "Feature 3"]} />
          <PricingPlan plan="Enterprise" price="Contact Us" features={["Custom features"]} />
        </HStack>
      </VStack>

      {/* Testimonials and Trust Signals */}
      <VStack spacing={8} p={8} bg="blue.50">
        <Heading>Testimonials</Heading>
        <Text>"Great product, excellent support!" - John Doe</Text>
        <Text>"Our team's productivity has doubled!" - Jane Smith</Text>
        <Flex>
          <Icon as={FaFacebook} w={6} h={6} />
          <Icon as={FaTwitter} w={6} h={6} />
          <Icon as={FaInstagram} w={6} h={6} />
        </Flex>
      </VStack>

      {/* Footer */}
      <Flex as="footer" p={4} bg="gray.700" color="white" justify="space-between">
        <VStack align="start">
          <Link>About Us</Link>
          <Link>Contact</Link>
        </VStack>
        <VStack align="start">
          <Link>Privacy Policy</Link>
          <Link>Terms of Service</Link>
        </VStack>
      </Flex>

      {/* CTA Reiteration */}
      <Flex direction="column" align="center" justify="center" bg="teal.500" p={8}>
        <Heading color="white" fontSize="3xl">Ready to Start?</Heading>
        <Button colorScheme="orange" size="lg" mt={4}>Sign Up Now</Button>
      </Flex>
    </Box>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <VStack bg="white" boxShadow="md" p={4} m={2} borderRadius="md">
    <Icon as={icon} w={10} h={10} />
    <Text fontWeight="bold">{title}</Text>
    <Text>{description}</Text>
  </VStack>
);

const PricingPlan = ({ plan, price, features }) => (
  <VStack bg="white" boxShadow="md" p={4} m={2} borderRadius="md">
    <Heading size="md">{plan}</Heading>
    <Text fontSize="2xl">{price}</Text>
    <VStack>
      {features.map(feature => <Text key={feature}>{feature}</Text>)}
    </VStack>
  </VStack>
);

export default Index;