import { Box, Heading, Text, Flex } from '@chakra-ui/react'
import React from 'react'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineHome } from "react-icons/ai";
import { GoClock } from "react-icons/go";
import { AiOutlineThunderbolt } from "react-icons/ai";

const Discover: React.FC = () => {
    return (
        <Box py={{ base: '80px' }} px={{ base: '20px' }} bg={'#F5F5F5'}>
            <Flex flexDir={{ base: 'column', xl:"row" }} alignItems={{lg:'center'}} gap={{lg:'10px'}} width={'100%'}  maxWidth='1216px' mx={'auto'}>

                <Box width={{xl:'62%'}} >
                    <Box>
                        <Heading as={'h2'}> Discover Tranquility and Adventure </Heading>
                        <Text pt={{ base: '20px' }} textColor={'gray.700'}> Nestled in the vibrant hub of Tapovan, Weekends Forever Max Tapovan is more than just a hostel; it&apos;s your gateway to the soulful energy of Rishikesh. With proximity to adventure activities like river rafting and trekking, as well as spiritual landmarks, we provide the best of both worlds. </Text>
                    </Box>


                    <Flex flexDir={{ base: 'column', md:"row" }} justifyItems={'center'} flexWrap={'wrap'} gap={{ base: '30px' }} className='pt-8'>
                        <Box bg={'white'} width={{md:'48%'}} className='shadow-lg rounded-lg hover:-translate-y-1 transition-all duration-300' p={{ base: '25px' }} >
                            < HiOutlineLocationMarker className='text-3xl text-yellow-400' />
                            <Heading py={{ base: '8px' }} as={'h5'} fontSize={{ base: '20px' }} fontWeight={'semibold'}>Prime Location</Heading>
                            <Text textColor={'gray.700'}>Just 6 minutes from Laxman Jhula, perfect for exploring Rishikesh</Text>
                        </Box>
                        <Box bg={'white'} width={{md:'48%'}} className='shadow-lg rounded-lg hover:-translate-y-1 transition-all duration-300' p={{ base: '25px' }}>
                            < AiOutlineHome className='text-3xl text-yellow-400' />
                            <Heading py={{ base: '8px' }} as={'h5'} fontSize={{ base: '20px' }} fontWeight={'semibold'}>Cozy Comfort</Heading>
                            <Text textColor={'gray.700'}>15 spacious and bright rooms with all essential amenities</Text>
                        </Box>
                        <Box bg={'white'} width={{md:'48%'}} className='shadow-lg rounded-lg hover:-translate-y-1 transition-all duration-300' p={{ base: '25px' }}>
                            < GoClock className='text-3xl text-yellow-400' />
                            <Heading py={{ base: '8px' }} as={'h5'} fontSize={{ base: '20px' }} fontWeight={'semibold'}>24/7 Support</Heading>
                            <Text textColor={'gray.700'}>Round-the-clock assistance for all your needs</Text>
                        </Box>
                        <Box bg={'white'} width={{md:'48%'}} className='shadow-lg rounded-lg hover:-translate-y-1 transition-all duration-300' p={{ base: '25px' }}>
                            <  AiOutlineThunderbolt className='text-3xl text-yellow-400' />
                            <Heading py={{ base: '8px' }} as={'h5'} fontSize={{ base: '20px' }} fontWeight={'semibold'}>Adventure Ready</Heading>
                            <Text textColor={'gray.700'}>Easy access to rafting, trekking, and spiritual activities</Text>
                        </Box>

                    </Flex>
                </Box>

                <Box width={{xl:'40%'}} bg={'black'} textColor={'white'} p={{base:'20px'}} className=' my-10 rounded-2xl max-w-[350px] w-full mx-auto h-fit'>
                    <Text className='text-center text-2xl  font-bold pb-8'>Why Choose Us</Text>

                    <Box className='flex justify-around'>
                        <Box className='flex flex-col items-center'>
                            <Text className='text-4xl font-bold text-yellow-400'>4.6/5</Text>
                            <Text className='text-sm text-gray-400'>Guest Rating</Text>
                        </Box>
                        <Box className='flex flex-col items-center'>
                            <Text className='text-4xl font-bold text-yellow-400'>15+</Text>
                            <Text className='text-sm text-gray-400'>Guest Rating</Text>
                        </Box>
                    </Box>
                    <Box className='flex justify-around py-8'>
                        <Box className='flex flex-col items-center'>
                            <Text className='text-4xl font-bold text-yellow-400'>24/7</Text>
                            <Text className='text-sm text-gray-400'>Support</Text>
                        </Box>
                        <Box className='flex flex-col items-center'>
                            <Text className='text-4xl font-bold text-yellow-400'>6min</Text>
                            <Text className='text-sm text-gray-400'>To Laxman Jhula</Text>
                        </Box>
                    </Box>
                </Box>

            </Flex>

        </Box>
    )
}

export default Discover
