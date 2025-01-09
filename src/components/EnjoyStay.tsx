import React from "react";
import { Box, Text, Flex, Grid } from "@chakra-ui/react";
import { RxHome } from "react-icons/rx";
import { HiOutlineUserGroup } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";
import { IoWifi } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { BsShieldCheck } from "react-icons/bs";

const EnjoyStay: React.FC = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      textAlign="center"
      gap="4"
      bg="#FAFAFA"
      py="80px"
      px="24px"
    >
      <Text
        fontSize={{ base: "3xl", sm: "4xl" }}
        fontWeight="bold"
        color="#1F2937"
      >
        Enjoy Your Stay to the Fullest
      </Text>
      <Text
        fontSize={{ base: "md", sm: "lg" }}
        color="#4B5563"
        maxWidth="2xl"
        mx="auto"
        mb="64px"
      >
        Experience comfort and convenience with our carefully curated amenities
        designed to make your stay memorable.
      </Text>
      <Grid
        templateColumns="repeat(1, 1fr)"
        gap={8}
        display="grid"
        gridTemplateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
      >
        <Flex
          flexDirection="column"
          align="start"
          p="6"
          bg="white"
          borderRadius="xl"
          boxShadow="lg"
          transition="transform 0.3s ease" // Ensure smooth transition
          _hover={{ transform: "translateY(-8px)" }}
          width="full"
        >
          <Box color="#ECC94B" mb="4">
            <RxHome fontSize="40px" />
          </Box>
          <Text fontSize="xl" fontWeight="bold" color="#1F2937" mb="2">
            Terrace Café
          </Text>
          <Text color="#4B5563" align="start">
            Enjoy delicious meals and beverages with stunning views of the
            surrounding hills from our rooftop café.
          </Text>
        </Flex>

        <Flex
          flexDirection="column"
          align="start"
          p="6"
          bg="white"
          borderRadius="xl"
          boxShadow="lg"
          transition="transform 0.3s ease" // Ensure smooth transition
          _hover={{ transform: "translateY(-8px)" }}
          width="full"
        >
          <Box color="#ECC94B" mb="4">
            <HiOutlineUserGroup fontSize="40px" />
          </Box>
          <Text fontSize="xl" fontWeight="bold" color="#1F2937" mb="2">
            Common Room
          </Text>
          <Text color="#4B5563" align="start">
            Socialize in our spacious first-floor common room, perfect for
            meeting fellow travelers and relaxing.
          </Text>
        </Flex>

        <Flex
          flexDirection="column"
          align="start"
          p="6"
          bg="white"
          borderRadius="xl"
          boxShadow="lg"
          transition="transform 0.3s ease" // Ensure smooth transition
          _hover={{ transform: "translateY(-8px)" }}
          width="full"
        >
          <Box color="#ECC94B" mb="4">
            <FaRegUserCircle fontSize="40px" />
          </Box>
          <Text fontSize="xl" fontWeight="bold" color="#1F2937" mb="2">
            24/7 Help Desk
          </Text>
          <Text color="#4B5563" align="start">
            Round-the-clock assistance for all your needs, ensuring a
            comfortable and hassle-free stay.
          </Text>
        </Flex>

        <Flex
          flexDirection="column"
          align="start"
          p="6"
          bg="white"
          borderRadius="xl"
          boxShadow="lg"
          transition="transform 0.3s ease" // Ensure smooth transition
          _hover={{ transform: "translateY(-8px)" }}
          width="full"
        >
          <Box color="#ECC94B" mb="4">
            <IoWifi fontSize="40px" />
          </Box>
          <Text fontSize="xl" fontWeight="bold" color="#1F2937" mb="2">
            Free Wi-Fi
          </Text>
          <Text color="#4B5563" align="start">
            Stay connected with high-speed internet access throughout the
            property.
          </Text>
        </Flex>

        <Flex
          flexDirection="column"
          align="start"
          p="6"
          bg="white"
          borderRadius="xl"
          boxShadow="lg"
          transition="transform 0.3s ease" // Ensure smooth transition
          _hover={{ transform: "translateY(-8px)" }}
          width="full"
        >
          <Box color="#ECC94B" mb="4">
            <MdMailOutline fontSize="40px" />
          </Box>
          <Text fontSize="xl" fontWeight="bold" color="#1F2937" mb="2">
            Travel Desk
          </Text>
          <Text color="#4B5563" align="start">
            Book local tours, trekking, and rafting adventures with our
            knowledgeable travel desk.
          </Text>
        </Flex>

        <Flex
          flexDirection="column"
          align="start"
          p="6"
          bg="white"
          borderRadius="xl"
          boxShadow="lg"
          transition="transform 0.3s ease" // Ensure smooth transition
          _hover={{ transform: "translateY(-8px)" }}
          width="full"
        >
          <Box color="#ECC94B" mb="4">
            <BsShieldCheck fontSize="40px" />
          </Box>
          <Text fontSize="xl" fontWeight="bold" color="#1F2937" mb="2">
            24/7 Security
          </Text>
          <Text color="#4B5563" align="start">
            Safe and secure environment with round-the-clock security
            surveillance.
          </Text>
        </Flex>
      </Grid>
    </Flex>
  );
};

export default EnjoyStay;
