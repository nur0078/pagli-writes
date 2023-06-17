import React from 'react';
import Card from './Card';
import Navbar from './Navbar';
import Footer from './Footer';

const Poem = () => {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <h3 className="text-6xl font-bold text-center pt-10"> Poems </h3>
      {/* DISPLAY GRIDS */}
      <div className="pt-20 grid grid-cols-12 gap-4 w-11/12">
        <div className=" col-start-2 col-span-4 gap-4 justify-around ">
          <Card />
        </div>
        <div className=" col-start-8 col-span-4 gap-4 justify-around ">
          <Card />
        </div>
        <div className=" col-start-2 col-span-4 gap-4 justify-around pt-20">
          <Card />
        </div>
        <div className=" col-start-8 col-span-4 gap-4 justify-around pt-20 ">
          <Card />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Poem;
