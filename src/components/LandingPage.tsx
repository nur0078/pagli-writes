import React from 'react';
import Navbar from './Navbar';
import CoverPic from '../assets/images/sydney.jpeg';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="h-screen">
        <div className="flex justify-around  py-8 items-center">
          <h1 className="text-6xl  ">Rukmini</h1>
          <img className="rounded-lg shadow-lg w-1/3 " src={CoverPic} alt="Ruku in Sydney" />
          <h1 className="text-6xl">Pagli</h1>
        </div>
        <div className="px-10">
          <p className="text-2xl text-pencil text-justify ">
            Consectetur culpa et eu cupidatat est eiusmod eiusmod cillum aliquip reprehenderit
            consectetur. Consectetur culpa et eu cupidatat est eiusmod eiusmod cillum aliquip
            reprehenderit consectetur. Consectetur culpa et eu cupidatat est eiusmod eiusmod cillum
            aliquip reprehenderit consectetur. consectetur. Consectetur culpa et eu cupidatat est
            eiusmod eiusmod cillum aliquip reprehenderit consectetur. Consectetur culpa et eu
            cupidatat est eiusmod eiusmod cillum aliquip reprehenderit consectetur.
          </p>
          <a href="/about" className=" align-center">
            <button className="text-xl mt-2 bg-btn rounded-lg"> Read More... </button>
          </a>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
