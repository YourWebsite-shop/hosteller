'use client'
import { Star } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

interface TestimonialProps {
  initial: string;
  name: string;
  rating: number;
  text: string;
}

function Testimonial({ initial, name, rating, text }: TestimonialProps) {
  return (
    <div className="bg-zinc-900 rounded-lg p-6">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white">
          {initial}
        </div>
        <div>
          <h3 className="font-medium text-white">{name}</h3>
          <div className="flex">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-400">"{text}"</p>
    </div>
  );
}

function BookingModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-8 py-6 rounded-full text-lg"
      >
        Book Your Stay Now
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
  <ModalOverlay />
  <ModalContent bg={'black'} className="border-[3px] rounded-xl border-[#262626]">
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

    </>
  );
}

export default function TestimonialsSection() {
  const testimonials: TestimonialProps[] = [
    {
      initial: "H",
      name: "Happy Guest",
      rating: 4,
      text: "An amazing stay with a great view of the hills! The staff was friendly, and the location was unbeatable."
    },
    {
      initial: "S",
      name: "Satisfied Traveler",
      rating: 4,
      text: "Our trip was made even better by the cozy and clean dorm rooms. Highly recommend!"
    },
    {
      initial: "A",
      name: "Adventure Seeker",
      rating: 4,
      text: "Perfect location for rafting and trekking. The travel desk was super helpful in arranging our adventures!"
    }
  ];

  return (
    <ChakraProvider>
      <div className="bg-black text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Guests Say</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Join our community of happy travelers who've experienced the magic of Weekends Forever Max Tapovan.
            </p>
          </div>

          <div className="bg-zinc-900/50 rounded-xl p-8 mb-16 text-center">
            <div className="text-6xl font-bold text-yellow-400 mb-2">4.1</div>
            <div className="flex justify-center gap-1 mb-2">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-gray-400">Overall Rating</div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>

          <div className="text-center">
            <BookingModal />
          </div>
        </div>
      </div>
    </ChakraProvider>
  );
}
