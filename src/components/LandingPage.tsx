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
            Hello there, I am a poet, a businesswoman, and a proud mother of two wonderful sons. As
            a writer, I find solace in the beauty of words and the power of language, and in the
            literature world I am also known as “Pagli”. I believe that poetry has the ability to
            capture the essence of our emotions and experiences and convey them in a way that
            touches the hearts of others.
            <br />
            Being a mother has also had a profound impact on my writing. It has taught me to see the
            world through the eyes of my children, and to appreciate the simple joys and wonders of
            life. I hope that my poetry can inspire others to embrace the beauty of everyday moments
            and cherish the relationships that matter most...
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
