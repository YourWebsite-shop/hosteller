import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";

const Hero: React.FC = () => {
  return (
    <Box bg={"#181818"}>
      <Box maxWidth={"1216px"}>
        <Text
          fontSize={{ base: "36px", sm: "48px", md: "60px" }}
          fontWeight="bold"
          color="white"
          mb="6"
          className="animate__animated animate__fadeInDown"
        >
          Welcome to Weekends Forever
          <Text as="span" display="block" color="yellow.400" mt="2">
            Rishikesh
          </Text>
        </Text>

        <Text>
          Your perfect escape in the serene landscapes of Rishikesh. Located in
          the heart of Tapovan, just 6 minutes from Laxman Jhula.
        </Text>
        <Box>
          <Button>Book Now</Button>
          <Button>Learn More</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
