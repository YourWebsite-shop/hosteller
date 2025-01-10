"use client";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Text,
  VStack,
  Image,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import Logo from "@/assets/Logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure(); // Modal controls
  const navLinks = [""];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Box bg="#181818" px={4} color="white" position="relative">
      <Flex align="center" justify="space-between" px={{ lg: "90px" }}>
        <Image src={Logo.src} alt="logo" width="50px" />

        {/* Hamburger Icon for mobile */}
        <IconButton
          aria-label="Open menu"
          icon={isMobileMenuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
          display={{ base: "flex", md: "none" }}
          onClick={toggleMobileMenu}
          bg="transparent"
          color="white"
          _hover={{ bg: "gray.700" }}
        />

        {/* Right side options for larger screens */}
        <HStack
          spacing={8}
          display={{ base: "none", md: "flex" }}
          align="center"
        >
          {navLinks.map((link, index) => (
            <Text key={index} _hover={{ color: "yellow.400" }}>
              {link}
            </Text>
          ))}

          {/* Book Now Button */}
          <Button
            bg="#FACC15"
            color="black"
            px={4}
            py={2}
            rounded="md"
            fontWeight="semibold"
            _hover={{ bg: "yellow.400" }}
            onClick={onOpen} // Open modal
          >
            Book Now
          </Button>
        </HStack>
      </Flex>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <VStack
          spacing={4}
          align="start"
          bg="#181818"
          p={4}
          display={{ base: "flex", md: "none" }}
          position="absolute"
          top="60px"
          left="0"
          right="0"
          zIndex="10"
        >
          {navLinks.map((link, index) => (
            <Text
              key={index}
              _hover={{ color: "yellow.400" }}
              onClick={toggleMobileMenu}
            >
              {link}
            </Text>
          ))}

          {/* Book Now Button */}
          <Button
            bg="#FACC15"
            color="black"
            width="full"
            justifyContent="flex-start"
            px={1}
            py={2}
            rounded="md"
            fontWeight="semibold"
            _hover={{ bg: "yellow.400" }}
            onClick={() => {
              toggleMobileMenu();
              onOpen(); // Open modal
            }}
          >
            Book Now
          </Button>
        </VStack>
      )}

      {/* Modal for Book Now */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent bg={"black"} className="border-2 border-[#262626]">
          <ModalHeader className="text-white">Contact Us</ModalHeader>
          <ModalCloseButton className="text-white" />
          <ModalBody>
            <div className="text-center text-lg text-gray-200 font-medium">
              For bookings, please call:
              <div className="text-2xl font-bold mt-2 text-white">
                +91 9762246777
              </div>
              <div className="text-2xl font-bold mt-2 text-white">
                +91 9265260329
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} className="text-white">
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Navbar;
