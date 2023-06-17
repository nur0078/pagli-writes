import Navbar from './Navbar';
import RukuPic from '../assets/images/PoemPage/blackDress.png';
import Footer from './Footer';

const PoemPage = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen relative">
        <div className="pt-20 grid grid-cols-12 gap-4 pb-8">
          <h3 className=" text-3xl col-start-6 col-span-2 pt-12 "> नींद हो गई क्यों ? </h3>
          <article className="col-start-5 col-span-2 justify-content text-pencil text-2xl pt-10 leading-loose">
            नींद क्यों हो गई <br />
            आज बेचारी <br />
            थकने के बाद भी <br />
            आती नही <br />
            रात सारी सारी । <br />
            बाहर देखती हूं <br />
            धिरे धिरे <br />
            सोने जा रही चांदनी <br />
            तारे भी मौन हैं <br />
            सुनकर अंधकार की कहानी <br />
            आखें क्यों हो गयी <br />
            बेबस बेचारी <br />
            निंद …….
            <br />
            है ठहरने लगे <br />
            उनके यादों के तराने <br />
            है मुस्किल में पड़ गया <br />
            दिल के भिगे भिगे फसाने <br />
            निंद क्यों हो गयी <br />
            पलकों की लाचारी <br />
            थकने के बाद भी <br />
            आती नहीं <br />
            रात सारी सारी <br />
            निंद…….!!
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

export default PoemPage;
