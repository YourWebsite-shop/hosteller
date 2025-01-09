// import { Box, Flex, Text, Button, useDisclosure } from '@chakra-ui/react';
// import { GiHamburgerMenu } from "react-icons/gi";
// import Link from 'next/link';

// const Navbar = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   return (
//     <Box as="nav" bg="#08090A" color="white" p={4}>
//       <Flex align="center" justify="space-between" maxW="7xl" mx="auto">
//         {/* Logo Section */}
//         <Text fontSize="2xl" fontWeight="bold">
//           Logo
//         </Text>

//         {/* Desktop Menu */}
//         <Flex
//           display={{ base: 'none', md: 'flex' }}
//           align="center"
//           gap="6"
//         >
//           <Link href="#home">
//             <Text
//               fontSize="lg"
//               fontWeight="semibold"
//               _hover={{ textDecoration: 'underline' }}
//             >
//               Home
//             </Text>
//           </Link>
//           <Link href="#contact">
//             <Text
//               fontSize="lg"
//               fontWeight="semibold"
//               _hover={{ textDecoration: 'underline' }}
//             >
//               Contact
//             </Text>
//           </Link>
//           <Link href="#book-now">
//             <Button
//               bg="#ECC94B"
//               color="white"
//               _hover={{ bg: '#D69E2E' }}
//               rounded="full"
//               px={6}
//             >
//               Book Now
//             </Button>
//           </Link>
//         </Flex>

//         {/* Mobile Menu Toggle Button */}
//         <Box display={{ base: 'block', md: 'none' }}>
//           <Button variant="link" onClick={onOpen} color="white">
//             <GiHamburgerMenu fontSize={6} />
//           </Button>
//         </Box>
//       </Flex>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <Box
//           display={{ base: 'block', md: 'none' }}
//           position="absolute"
//           top="100%"
//           left="0"
//           right="0"
//           bg="#08090A"
//           p={4}
//         >
//           <Flex direction="column" align="start" gap={4}>
//             <Link href="#home">
//               <Text fontSize="lg" fontWeight="semibold" color="white">
//                 Home
//               </Text>
//             </Link>
//             <Link href="#contact">
//               <Text fontSize="lg" fontWeight="semibold" color="white">
//                 Contact
//               </Text>
//             </Link>
//             <Link href="#book-now">
//               <Button
//                 bg="#ECC94B"
//                 color="white"
//                 _hover={{ bg: '#D69E2E' }}
//                 rounded="full"
//                 px={6}
//               >
//                 Book Now
//               </Button>
//             </Link>
//           </Flex>
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default Navbar;
