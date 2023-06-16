import React from 'react';
import Navbar from './Navbar';
import CoverPic from '../assets/images/sydney.jpeg';
import Footer from './Footer';
import Card from './Card';

const LandingPage = () => {
  return (
    <div>
      <Navbar />

      {/* LANDING COVER */}
      <div className="h-screen">
        <div className="flex justify-center gap-14 flex-wrap pt-9 items-center">
          <h1 className="text-6xl  ">Rukmini</h1>

          {/* COVER IMAGE */}
          <img className="rounded-2xl shadow-xl w-1/3 " src={CoverPic} alt="Ruku in Sydney" />

          <h1 className="text-6xl">Pagli</h1>
        </div>

        {/* MONOLOGUE */}
        <div className="px-10 w-4/5 m-auto pt-20 ">
          <p className="text-2xl text-pencil  text-justify max-w-screen leading-9">
            Consectetur culpa et eu cupidatat est eiusmod eiusmod cillum aliquip reprehenderit
            consectetur. Consectetur culpa et eu cupidatat est eiusmod eiusmod cillum aliquip
            reprehenderit consectetur. Consectetur culpa et eu cupidatat est eiusmod eiusmod cillum
            aliquip reprehenderit consectetur. consectetur.
          </p>

          {/* READ MORE BUTTON */}
          <a href="/about" className=" align-center">
            <button className="text-xl bg-btn rounded-lg mt-4 "> Read More... </button>
          </a>
        </div>

        {/* MY WRITING */}
        <h1 className="text-6xl text-center w-screen pt-10 ">My Writings...</h1>

        {/* POEMS SECTION*/}
        <h3 className="text-4xl text-center w-screen pt-28">Poems</h3>

        {/* POEM DISPLAY CARDS */}
        <div className="flex justify-center w-4/5 m-auto pt-16">
          <div className="flex gap-10 max-w-full ">
            <Card />
            <Card />
            <Card />
          </div>
        </div>

        {/* GHAZALS SECTION */}

        <h3 className="text-4xl text-center w-screen pt-16">Ghazals</h3>

        {/* GHAZAL DISPLAY CARDS */}
        <div className="flex justify-center w-4/5 m-auto pt-16">
          <div className="flex gap-10 max-w-full ">
            <Card />
            <Card />
            <Card />
          </div>
        </div>

        {/* FOOTER */}
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
