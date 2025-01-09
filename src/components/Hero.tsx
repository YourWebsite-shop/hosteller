import React from "react";
import { Box, Text, Button, Flex } from "@chakra-ui/react";
import { FaArrowDown } from "react-icons/fa6";

const Hero: React.FC = () => {
  return (
    <Box bg="#181818" mt="-50px">
      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        minHeight="100vh"
        textAlign="center"
        pt={{ base: "180px", sm: "220px" }}
      >
        <Text
          fontSize={{ base: "36px", sm: "48px", md: "64px" }}
          fontWeight="bold"
          color="white"
          mb="4"
          lineHeight={{ base: "1", sm: "1.1", md: "1.2" }}
        >
          Welcome to Weekends Forever
          <Text textAlign="center" as="span" display="block" color="#FACC15">
            Rishikesh
          </Text>
        </Text>

        <Text
          fontSize={{ base: "lg", sm: "xl" }}
          color="gray.300"
          maxWidth="3xl"
          mx="auto"
          mb="8"
        >
          Your perfect escape in the serene landscapes of Rishikesh. Located in
          the heart of Tapovan, just 6 minutes from Laxman Jhula.
        </Text>

        <Box
          display="flex"
          flexDirection={{ base: "column", sm: "row" }}
          gap="16px"
          justifyContent="center"
          alignItems="center"
        >
          <Button
            px="8"
            py="6"
            bg="#FACC15"
            color="#1A202C"
            borderRadius="full"
            fontWeight="semibold"
            _hover={{ bg: "yellow.400" }}
          >
            Book Now
          </Button>

          <Button
            px="8"
            py="6"
            border="2px"
            bg="#181818"
            borderColor="white"
            color="white"
            borderRadius="full"
            _hover={{
              bg: "white",
              color: "#1A202C",
            }}
          >
            Learn More
          </Button>
        </Box>

        {/* Bottom Flex (pushed to the bottom) */}
        <Flex
          flexDirection="row"
          gap="32px"
          marginTop="auto" // Pushes this section to the bottom of the page
          mb="40px"
          position="relative"
        >
          <Flex direction="column" align="center">
            <Text
              color="#e5e7eb"
              fontSize="4xl"
              lineHeight={"1"}
              fontWeight="bold"
            >
              4.1
            </Text>
            <Text color="#e5e7eb" fontSize="sm">
              Guest Rating
            </Text>
          </Flex>

          <Flex direction="column" align="center">
            <Text
              color="#e5e7eb"
              fontSize="4xl"
              fontWeight="bold"
              lineHeight={"1"}
            >
              15+
            </Text>
            <Text color="#e5e7eb" fontSize="sm">
              Rooms
            </Text>
          </Flex>

          <Flex direction="column" align="center">
            <Text
              color="#e5e7eb"
              fontSize="4xl"
              fontWeight="bold"
              lineHeight={"1"}
            >
              24/7
            </Text>
            <Text color="#e5e7eb" fontSize="sm">
              Support
            </Text>
          </Flex>
          <Box
            position="absolute"
            bottom="-6"
            right="32" 
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="gray.700"
          >
            <FaArrowDown fontSize="24px" />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Hero;
