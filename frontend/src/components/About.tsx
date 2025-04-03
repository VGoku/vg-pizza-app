import React from 'react';
import { FaPizzaSlice, FaClock, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1604069922731-1d0a0c0a8a1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      <div className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <FaPizzaSlice className="text-5xl text-red-500 mr-4 animate-bounce" />
              <h1 className="text-5xl font-bold text-white">
                Our Story
              </h1>
            </div>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Bringing families together through the love of pizza since 1995
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white bg-opacity-90 rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                At Pizza Paradise, we believe that great pizza brings people together. 
                Our mission is to create memorable moments through delicious, 
                handcrafted pizzas made with the finest ingredients.
              </p>
              <p className="text-gray-700">
                Every pizza we make is a labor of love, from our homemade dough to 
                our carefully selected toppings. We're proud to be part of your 
                family gatherings, celebrations, and everyday moments.
              </p>
            </div>

            <div className="bg-white bg-opacity-90 rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span className="text-gray-700">Quality ingredients from local suppliers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span className="text-gray-700">Traditional recipes with a modern twist</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span className="text-gray-700">Family-friendly atmosphere</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span className="text-gray-700">Sustainable business practices</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-90 rounded-2xl p-6 shadow-xl flex items-center">
              <FaClock className="text-4xl text-red-500 mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Opening Hours</h3>
                <p className="text-gray-700">Mon-Sun: 11:00 AM - 10:00 PM</p>
              </div>
            </div>

            <div className="bg-white bg-opacity-90 rounded-2xl p-6 shadow-xl flex items-center">
              <FaMapMarkerAlt className="text-4xl text-red-500 mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Location</h3>
                <p className="text-gray-700">123 Pizza Street, Food City</p>
              </div>
            </div>

            <div className="bg-white bg-opacity-90 rounded-2xl p-6 shadow-xl flex items-center">
              <FaPhone className="text-4xl text-red-500 mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Contact Us</h3>
                <p className="text-gray-700">(555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 