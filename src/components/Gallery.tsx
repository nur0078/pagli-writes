import Selfie from '../assets/images/GalleryPage/selfie.jpeg';

const Poem = () => {
  return (
    <div className="min-h-screen ">
      <h3 className="text-6xl font-bold text-center pt-10"> GALLERY </h3>

      {/* DISPLAY GRIDS */}
      <div className=" pt-20 grid grid-cols-12 gap-8  w-11/12">
        <div className=" col-start-3 col-span-4 gap-4 justify-around ">
          <img src={Selfie} alt="Ruku" className=" rounded-xl shadow-2xl " />
        </div>
        <div className=" col-start-8 col-span-4 gap-4 justify-around ">
          <img src={Selfie} alt="Ruku" className="rounded-xl shadow-2xl" />
        </div>
        <div className=" col-start-3 col-span-4 gap-4 justify-around pt-6 ">
          <img src={Selfie} alt="Ruku" className="rounded-xl shadow-2xl" />
        </div>
        <div className=" col-start-8 col-span-4 gap-4 justify-around pt-6 ">
          <img src={Selfie} alt="Ruku" className="rounded-xl shadow-2xl " />
        </div>
      </div>
    </div>
  );
};

export default Poem;
