import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousel from "../components/Carousel"; // Import the Carousel component

export default function Home() {
  return (
    <div>
      <Navbar />
      <Carousel /> {/* Add Carousel component here */}
      
      <div className='m-3'>
        <Card ImgSrc="https://via.placeholder.com/150?text=Image1" />
        <Card ImgSrc="https://via.placeholder.com/150?text=Image2" />
        <Card ImgSrc="https://via.placeholder.com/150?text=Image3" />
        <Card ImgSrc="https://via.placeholder.com/150?text=Image4" />
      </div>
      
      <Footer />
    </div>
  );
}
