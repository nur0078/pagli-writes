import React from 'react';
import Navbar from './Navbar';
import RukuPic from '../assets/images/PoemPage/blackDress.png';
import Footer from './Footer';

const Poems = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen relative">
        <div className="pt-20 grid grid-cols-12 gap-4 pb-8">
          <h3 className=" text-3xl col-start-6 col-span-1 pt-14 "> Poems </h3>
          <article className="col-start-2 col-span-5 justify-content text-pencil text-xl pt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </article>
          <img
            className="col-start-8 col-span-4 h-96 rounded-2xl mt-10 "
            src={RukuPic}
            alt="Ruku looking pretty"
          />
        </div>

        <div className="pt-8 aboslute bottom-0 ">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Poems;
