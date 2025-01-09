"use client"
import React from "react";
import {
  Box,
  Flex,
  Text,
  Grid,
  Image,
  Heading,
  Button,
} from "@chakra-ui/react";
import room from "@/assets/room.png";
import living from "@/assets/living.png";
import entrance from "@/assets/entrance.png";
import outdoor from "@/assets/outdoor.png";
import washroom from "@/assets/washroom.png";
import room2 from "@/assets/room2.png";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react'

const Experience: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
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
        Experience Our Hostel
      </Text>
      <Text
        fontSize={{ base: "md", sm: "lg" }}
        color="#4B5563"
        maxWidth="2xl"
        mx="auto"
        mb="64px"
      >
        Take a virtual tour through our spaces and imagine your perfect stay
        with us.
      </Text>
      <Grid
        templateColumns="repeat(1, 1fr)"
        gap={6}
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
          borderRadius="xl"
          boxShadow="lg"
          position="relative" // Ensures the overlay is positioned relative to this container
          width="full"
          overflow="hidden" // Prevents overflow of the image or overlay
          role="group" // Enables _groupHover for children
          maxWidth={{ base: "448px", sm: "720px", md: "460px", lg: "390px" }}
          maxHeight={"256px"}
        >
          {/* Background image */}
          <Image
            src={room.src}
            alt="room"
            width="100%"
            height="auto"
           
          />

          {/* Overlay */}
          <Box
            position="absolute"
            inset="0"
            bgGradient="linear(to-b, transparent, rgba(0, 0, 0, 0.7))"
            opacity="0"
            _groupHover={{ opacity: "1" }} // Show on hover
            transition="opacity 0.3s ease"
          >
            {/* Overlay Content */}
            <Box
              position="absolute"
              bottom="4"
              left="4"
              color="white"
              textAlign="left"
            >
              <Heading size="sm" fontWeight="semibold">
                Terrace Café
              </Heading>
              <Text fontSize="sm">Panoramic hill views</Text>
            </Box>
          </Box>
        </Flex>

        <Flex
          flexDirection="column"
          align="start"
          borderRadius="xl"
          boxShadow="lg"
          position="relative" // Ensures the overlay is positioned relative to this container
          width="full"
          overflow="hidden" // Prevents overflow of the image or overlay
          role="group" // Enables _groupHover for children
          maxWidth={{ base: "448px", sm: "720px", md: "460px", lg: "390px" }}
          maxHeight={"256px"}
        >
          {/* Background image */}
          <Image
            src={living.src}
            alt="room"
            width="100%"
            height="auto"
            objectFit="cover"
          />

          {/* Overlay */}
          <Box
            position="absolute"
            inset="0"
            bgGradient="linear(to-b, transparent, rgba(0, 0, 0, 0.7))"
            opacity="0"
            _groupHover={{ opacity: "1" }} // Show on hover
            transition="opacity 0.3s ease"
          >
            {/* Overlay Content */}
            <Box
              position="absolute"
              bottom="4"
              left="4"
              color="white"
              textAlign="left"
            >
              <Heading size="sm" fontWeight="semibold">
                Mixed Dormitory
              </Heading>
              <Text fontSize="sm">Comfortable bunk beds</Text>
            </Box>
          </Box>
        </Flex>
        <Flex
          flexDirection="column"
          align="start"
          borderRadius="xl"
          boxShadow="lg"
          position="relative" // Ensures the overlay is positioned relative to this container
          width="full"
          overflow="hidden" // Prevents overflow of the image or overlay
          role="group" // Enables _groupHover for children
          maxWidth={{ base: "448px", sm: "720px", md: "460px", lg: "390px" }}
          maxHeight={"256px"}
        >
          {/* Background image */}
          <Image
            src={washroom.src}
            alt="room"
            width="100%"
            height="auto"
            objectFit="cover"
          />

  {/* Overlay */}
  <Box
    position="absolute"
    inset="0"
    bgGradient="linear(to-b, transparent, rgba(0, 0, 0, 0.7))"
    opacity="0"
    _groupHover={{ opacity: "1" }} // Show on hover
    transition="opacity 0.3s ease"
  >
    {/* Overlay Content */}
    <Box
      position="absolute"
      bottom="4"
      left="4"
      color="white"
      textAlign="left"
    >
      <Heading size="sm" fontWeight="semibold">
        Common Room
      </Heading>
      <Text fontSize="sm">Social space</Text>
    </Box>
  </Box>
</Flex>


        <Flex
          flexDirection="column"
          align="start"
          borderRadius="xl"
          boxShadow="lg"
          position="relative" // Ensures the overlay is positioned relative to this container
          width="full"
          overflow="hidden" // Prevents overflow of the image or overlay
          role="group" // Enables _groupHover for children
          maxWidth={{ base: "448px", sm: "720px", md: "460px", lg: "390px" }}
          maxHeight={"256px"}
        >
          {/* Background image */}
          <Image
            src={room2.src}
            alt="room"
            width="100%"
            // height="auto"
            // objectFit="cover"
          />

          {/* Overlay */}
          <Box
            position="absolute"
            inset="0"
            bgGradient="linear(to-b, transparent, rgba(0, 0, 0, 0.7))"
            opacity="0"
            _groupHover={{ opacity: "1" }} // Show on hover
            transition="opacity 0.3s ease"
          >
            {/* Overlay Content */}
            <Box
              position="absolute"
              bottom="4"
              left="4"
              color="white"
              textAlign="left"
            >
              <Heading size="sm" fontWeight="semibold">
                Private Room
              </Heading>
              <Text fontSize="sm">Comfortable stay</Text>
            </Box>
          </Box>
        </Flex>

        <Flex
          flexDirection="column"
          align="start"
          borderRadius="xl"
          boxShadow="lg"
          position="relative" // Ensures the overlay is positioned relative to this container
          width="full"
          overflow="hidden" // Prevents overflow of the image or overlay
          role="group" // Enables _groupHover for children
          maxWidth={{ base: "448px", sm: "720px", md: "460px", lg: "390px" }}
          maxHeight={"256px"}
        >
          {/* Background image */}
          <Image
            src={outdoor.src}
            alt="room"
            width="100%"
            // height="auto"
            // objectFit="cover"
          />

          {/* Overlay */}
          <Box
            position="absolute"
            inset="0"
            bgGradient="linear(to-b, transparent, rgba(0, 0, 0, 0.7))"
            opacity="0"
            _groupHover={{ opacity: "1" }} // Show on hover
            transition="opacity 0.3s ease"
          >
            {/* Overlay Content */}
            <Box
              position="absolute"
              bottom="4"
              left="4"
              color="white"
              textAlign="left"
            >
              <Heading size="sm" fontWeight="semibold">
                Reception
              </Heading>
              <Text fontSize="sm">24/7 Help Desk</Text>
            </Box>
          </Box>
        </Flex>

        <Flex
          flexDirection="column"
          align="start"
          borderRadius="xl"
          boxShadow="lg"
          position="relative" // Ensures the overlay is positioned relative to this container
          width="full"
          overflow="hidden" // Prevents overflow of the image or overlay
          role="group" // Enables _groupHover for children
          maxWidth={{ base: "448px", sm: "720px", md: "460px", lg: "390px" }}
          maxHeight={"256px"}
        >
          {/* Background image */}
          <Image
            src={entrance.src}
            alt="room"
            width="100%"
            // height="auto"
            // objectFit="cover"
          />

          {/* Overlay */}
          <Box
            position="absolute"
            inset="0"
            bgGradient="linear(to-b, transparent, rgba(0, 0, 0, 0.7))"
            opacity="0"
            _groupHover={{ opacity: "1" }} // Show on hover
            transition="opacity 0.3s ease"
          >
            {/* Overlay Content */}
            <Box
              position="absolute"
              bottom="4"
              left="4"
              color="white"
              textAlign="left"
            >
              <Heading size="sm" fontWeight="semibold">
                Balcony View
              </Heading>
              <Text fontSize="sm">Scenic surroundings</Text>
            </Box>
          </Box>
        </Flex>
      </Grid>
      <Button
        bg="#111827"
        color="#FFFFFF"
        px="8"
        py="6"
        borderRadius="full"
        fontWeight="semibold"
        _hover={{ bg: "#1F2937" }}
        transition="background-color 0.2s ease"
        mt="64px"
        onClick={onOpen}
      >
        Book Your Stay Now
      </Button>




      {/* Modal */}
       <Modal isOpen={isOpen} onClose={onClose} isCentered>
              <ModalOverlay />
              <ModalContent bg={'black'} className="border-2 border-[#262626]">
                <ModalHeader className="text-white">Contact Us</ModalHeader>
                <ModalCloseButton className="text-white" />
                <ModalBody>
                  <div className="text-center text-lg text-gray-200 font-medium">
                    For bookings, please call:
                    <div className="text-2xl font-bold mt-2 text-white">+91 98765 43210</div>
                    <div className="text-2xl font-bold mt-2 text-white">+91 91234 56789</div>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button onClick={onClose} className="text-white">
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
    </Flex>
  );
};

export default Experience;
