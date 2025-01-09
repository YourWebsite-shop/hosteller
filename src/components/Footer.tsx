import { MapPin, Mail, Phone, Facebook, Instagram, Twitter } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-[1216px] mx-auto">
          {/* Left Column */}
          <div>
            <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-blue-500 mt-1" />
                <div>
                  <p className="font-medium mb-1">Location</p>
                  <p className="text-gray-400">Tapovan, Rishikesh</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-6 h-6 text-blue-500 mt-1" />
                <div>
                  <p className="font-medium mb-1">Email</p>
                  <p className="text-gray-400">contact@weekendsforevermax.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-6 h-6 text-blue-500 mt-1" />
                <div>
                  <p className="font-medium mb-1">Phone</p>
                  <p className="text-gray-400">+91 XXXXX XXXXX</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-zinc-900 p-6 rounded-lg">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  className="bg-zinc-800 border-zinc-700"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  className="bg-zinc-800 border-zinc-700"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  className="bg-zinc-800 border-zinc-700 min-h-[120px]"
                  placeholder="Your message"
                />
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-24 grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Weekends Forever Max</h3>
            <p className="text-gray-400 mb-4">
              Located in Tapovan, Rishikesh, we offer the perfect blend of comfort, adventure, and spirituality for your memorable stay.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Rooms</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Amenities</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Book Now</a></li>
            </ul>
          </div>

          {/* Activities */}
          <div>
            <h3 className="text-xl font-bold mb-4">Activities</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">River Rafting</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Trekking</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Yoga Classes</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Local Tours</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Tapovan, Rishikesh
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +91 XXXXX XXXXX
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                contact@weekendsforevermax.com
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-zinc-800 text-center text-gray-400">
          <p>© 2024 Weekends Forever Max Tapovan. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

