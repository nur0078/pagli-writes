import Navbar from './Navbar';
import Footer from './Footer';
import BoatPic from '../assets/images/GalleryPage/BoatXL.jpeg';

const About = () => {
  return (
    <div className="container--about">
      <Navbar />
      <div className="pt-6  w-4/5 flex flex-col items-center m-auto  ">
        <img className="rounded-full shadow-2xl h-96 pt-3" src={BoatPic} alt="Ruku in a boat" />

        <div className="pt-9 text-justify leading-8 text-[28px] font-normal text-pencil ">
          <p>
            Hello there,
            <br />I am a poet, a businesswoman, and a proud mother of two wonderful sons. As a
            writer, I find solace in the beauty of words and the power of language, and in the
            literature world I am also known as “Pagli”. I believe that poetry has the ability to
            capture the essence of our emotions and experiences and convey them in a way that
            touches the hearts of others.
          </p>
          <br />
          <p>
            Being a mother has also had a profound impact on my writing. It has taught me to see the
            world through the eyes of my children, and to appreciate the simple joys and wonders of
            life. I hope that my poetry can inspire others to embrace the beauty of everyday moments
            and cherish the relationships that matter most.
          </p>
          <br />
          <p>
            I believe that the best way to understand a new culture is to immerse oneself in it, and
            this is something that I have been doing for years. From the mountains of the Himalayas
            to the bustling cities of Europe, I have traveled to many different parts of the world,
            always with a notebook in hand.
          </p>
          <p>
            As a businesswoman, I have learned the importance of balancing the demands of work and
            family and carving out time for the things that truly matter. My writing is a reflection
            of this balance, and I strive to infuse my work with both creativity and practicality.
          </p>
          <br />
          <p>
            As a writer, I am passionate about sharing the stories and experiences that I have
            encountered on my travels. I believe that every place has a unique story to tell, and I
            am always on the lookout for those little moments and details that make each destination
            special.
          </p>
          <p>
            Through my writing, I aim to inspire others to explore the world around them and to
            appreciate the diversity of our planet. Whether it is through my travel essays, my
            poetry, or my short stories, I strive to create a sense of connection and empathy with
            my readers, inviting them to step into the shoes of people from different backgrounds
            and cultures.
          </p>
          <br />
          <p>
            So, whether you are an avid traveler or someone who simply loves to read about new
            places, or whether you are a lover of poetry, a fellow businesswoman, or a devoted
            parent, I invite you to explore my work and join me on this journey. Together,
            let&apos;s celebrate the joys of life and the power of words to uplift and inspire.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
