"use client"
import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from '@chakra-ui/react';
import { IoPlayCircleOutline } from "react-icons/io5";
import { FaPause } from "react-icons/fa";
import { HiOutlineSquares2X2 } from "react-icons/hi2";

const Adventure: React.FC = () => {


  const data = [
    {
      icon:IoPlayCircleOutline,
      title:"River Rafting",
      description:"Experience thrilling white-water rafting on the Ganges. Perfect for beginners and experienced adventurers alike."
    },
    {
      icon:FaPause,
      title:"Trekking Adventures",
      description:"Explore scenic mountain trails with guided trekking tours. Suitable for all fitness levels."
    },
    {
      icon:HiOutlineSquares2X2 ,
      title:"Yoga & Meditation",
      description:"Join yoga sessions at nearby centers. Perfect for spiritual seekers and wellness enthusiasts."
    },
  ]

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="bg-black pb-32 pt-20">
      <div className="max-w-[1216px] mx-auto py-10 px-4">
        <h2 className="text-white text-3xl lg:text-5xl text-center font-bold">
          Step Into the Adventure Capital of India
        </h2>
        <p className="text-center lg:text-xl lg:py-6 text-gray-300 py-2">
          Discover the perfect blend of adventure, spirituality, and culture in Rishikesh. Our strategic location puts you minutes away from the best experiences.
        </p>

        <div className="flex flex-col md:flex-row md:justify-around gap-y-6 mt-10 w-full ">
          {data.map((item, i) => (
            <div
              key={i}
              className="text-white bg-[#262626] p-6 rounded-2xl w-full hover:-translate-y-2 transition-all duration-200 md:w-[30%]"
            >
              <p className='text-3xl text-yellow-500'>{<item.icon/>}</p>
              <h5 className="text-xl font-semibold py-2">{item.title}</h5>
              <p className="text-gray-400">
                {item.description}
              </p>
              <button
                className="text-yellow-400 pt-4"
                onClick={openModal}
              >
                Book Now &rarr;
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full justify-center flex">
        <button
          className="bg-yellow-400 text-lg px-8 py-3 rounded-full text-black font-semibold"
          onClick={openModal}
        >
          Book Your Adventure Now
        </button>
      </div>

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={closeModal} isCentered>
        <ModalOverlay />
        <ModalContent bg={'black'} className="border-2 border-[#262626]">
          <ModalHeader className="text-white">Contact Us</ModalHeader>
          <ModalCloseButton className="text-white" />
          <ModalBody>
            <div className="text-center text-lg text-gray-200 font-medium">
              For bookings, please call:
              <div className="text-2xl font-bold mt-2 text-white">+91 9762246777</div>
              <div className="text-2xl font-bold mt-2 text-white">+91 9265260329</div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button onClick={closeModal} className="text-white">
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Adventure;
