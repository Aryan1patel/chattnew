import React, { useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MusicContext } from "../components/MusicContext.jsx";
import "../style/LandingPage.css";


const LandingPage = () => {
  const { playMusic, playHoverSound, playClickSound, playharley, playdexter, playtyler } = useContext(MusicContext);

  // Using only local images from public folder with simple paths
  const slides = [
    {
      img: "/finland.jpg",
      text: "She is from Finland.",
      subtitle: "some pics from her home",
      link: "/gallery2" // Added link for Finland slide
    },
    {
      img: "/take.jpg",
      text: "She knows taekwondo.",
      subtitle: "So be careful",
    },
    {
      img: "/maldives.jpg",
      text: "Where she recently travel.",
      subtitle: "Some pics taken by her",
      link: "/gallery" // Added link for Maldives/travel slide
    },
    {
      img: "/cakee.jpg",
      text: "Whats her favourite food to make.",
      subtitle: "you want to eat? you will if you are very lucky",
      link: "/image2" // Added link for cake/recipes slide
    }

  ];



  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    playHoverSound();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    playHoverSound();
  };

  const handleSlideClick = (index) => {
    playHoverSound();
    // You could add additional logic here if needed
  };



  return (
    <div className="min-h-screen text-white landing-page">
      {/* Hero Section with Fixed Background */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(/newback.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="mb-5 text-6xl md:text-8xl font-bold text-pink-400 drop-shadow-lg"

            >
              Stella's Kitchen
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mb-5 text-xl max-w-md mx-auto"
              style={{
                textShadow: "1px 1px 1px rgba(0, 0, 0, 0.5)", // Adds a simple shadow
              }}
            >
              A beautiful, kind, and strong girl who inspires me every day.
            </motion.p>
            <Link onClick={() => { playHoverSound; playMusic(); }}>
              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="btn btn-primary btn-lg glass"
                onMouseEnter={playHoverSound}
              >
                Play Music 👻
              </motion.button>
            </Link>
          </div>
        </div>
      </div>




      {/* Custom Slideshow Section */}
      <div className="bg-gradient-to-b from-base-300 to-base-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-bold  text-primary drop-shadow-lg">Meet her</h2>
          <h1 className="text-center text-xl font-bold mb-12 text-primary "></h1>

          {/* Custom Slideshow */}
          <div className="relative w-full h-[500px] overflow-hidden bg-black rounded-xl shadow-2xl">
            {/* Navigation Buttons */}
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 btn btn-circle btn-lg bg-base-100 bg-opacity-50 hover:bg-opacity-70"
              onClick={prevSlide}
              onMouseEnter={playHoverSound}
            >
              ❮
            </button>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 btn btn-circle btn-lg bg-base-100 bg-opacity-50 hover:bg-opacity-70"
              onClick={nextSlide}
              onMouseEnter={playHoverSound}
            >
              ❯
            </button>

            {/* Slides */}
            {slides.map((slide, index) => (
              <Link
                to={slide.link}
                key={index}
                onClick={() => { handleSlideClick(index); playHoverSound(); }}
                className="cursor-pointer block"
              >
                <motion.div
                  className="absolute top-0 left-0 w-full h-full"
                  initial={false}
                  animate={{
                    scale: index === currentSlide ? 1.1 : 1,
                    opacity: index === currentSlide ? 1 : 0.3,
                    zIndex: index === currentSlide ? 10 : 0,
                  }}
                  transition={{ duration: 0.7 }}
                  whileHover={{ scale: index === currentSlide ? 1.12 : 1.02 }}
                >
                  <div className="relative w-full h-full">
                    <img
                      src={slide.img}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        console.error(`Failed to load image: ${slide.img}`);
                        e.target.src = "/avatar.jpg";
                      }}
                    />
                    <div className="absolute inset-2 bg-secondary opacity-15"></div>
                  </div>

                  <div className="absolute inset-0 bg-transprant bg-opacity-40 flex flex-col items-center justify-center p-8">
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: index === currentSlide ? 1 : 0,
                        y: index === currentSlide ? 0 : 20
                      }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="text-4xl font-bold text-white mb-2 drop-shadow-2xl"
                      // style={{
                      //   textShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)", // Adds a simple shadow
                      // }}
                    >
                      {slide.text}
                    </motion.h3>
                    {/* <motion.p
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: index === currentSlide ? 1 : 0
                      }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      className="text-xl text-white text-center max-w-2xl"
                    >
                      {slide.subtitle}
                    </motion.p> */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: index === currentSlide ? 1 : 0
                      }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      className="mt-1 drop-shadow-2xl"
                      // style={{
                      //   textShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)", // Adds a simple shadow
                      // }}
                    >
                      <span className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-focus transition-colors duration-300">
                        {slide.subtitle}
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            ))}

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
              {slides.map((_, index) => (
                <button
                  key={`dot-${index}`}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-white scale-125" : "bg-white bg-opacity-50"
                    }`}
                  onClick={() => setCurrentSlide(index)}

                />
              ))}
            </div>
          </div>
        </div>
      </div>



      <div className="p-6 shadow-lg rounded bg-base-200">
        <h1 className="text-center text-2xl font-bold mb-12 text-primary drop-shadow-lg ">Her favourite character</h1>
        <div className="text-black flex space-x-4">

          {/* Harley Quinn Card */}
          <div className="card card-side bg-base-100 shadow-sm flex-1 ">
            <figure>
              <img src="/image/quinn2.jpg" alt="Movie" />
            </figure>
            <div className="card-body bg-white rounded-r-lg">
              <h2 className="card-title" >Harley Quinn</h2>
              <p>But I'm the one they should be scared of! Not you, not Mistah J! Because I'm Harley f***ing Quinn!.</p>
              <div className="card-actions justify-end">
                <Link to="/quinn" onClick={() => { playharley(); }}>
                  <button className="btn btn-accent">Talk to her</button>
                </Link>
              </div>
            </div>
          </div>

          {/* Dexter Card */}
          <div className="card card-side bg-base-100 shadow-sm flex-1 ">
            <figure>
              <img src="/image/dexter2.jpg" alt="Movie" />
            </figure>
            <div className="card-body bg-white rounded-r-lg">
              <h2 className="card-title">Dexter (Stella's fav)</h2>
              <p>People fake a lot of human interactions, but I feel like I fake them all, and I fake them very well</p>
              <div className="card-actions justify-end">
                <Link to="/dexter" onClick={() => { playdexter(); }}>
                  <button className="btn btn-accent">Talk to him</button>
                </Link>
              </div>
            </div>
          </div>

          {/* Tyler Durden Card */}
          <div className="card card-side bg-base-100 shadow-sm flex-1">
            <figure>
              <img src="/image/tyler.jpg" alt="Movie" />
            </figure>
            <div className="card-body bg-white rounded-r-lg">
              <h2 className="card-title">Tyler Durden</h2>
              <p>You do not talk about Fight Club.</p>
              <div className="card-actions justify-end">
                <Link to="/tyler" onClick={() => { playtyler(); }}>
                  <button className="btn btn-accent">Talk to him</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <br></br>
        <br></br>
        <br></br>


        <div className="flex justify-center">
          <a
            href="/chat"
            className="relative inline-block px-8 py-4 text-lg font-bold text-white bg-primary rounded-xl overflow-hidden group transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            <span className="absolute inset-0 bg-zinc-800 transition-all duration-300 ease-out transform scale-100 group-hover:scale-110 "></span>
            <span className="relative z-10">Join the Party 🎉</span>
          </a>
        </div>

        <br></br>





      </div>










      {/* Call to Action */}
      <div className="bg-black opacity-95 py-8 ">
        <div className="container mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-2xl font-bold mb-4 text-white drop-shadow-lg">
            Want to talk to this amazing lady? Go ahead… if you dare. 🥋
          </h2>

          {/* Links Section */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
            <p className="text-sm text-primary">
              Discord:{" "}
              <a
                href="https://discord.com/users/poltergeist2102"
                className="text-accent hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                poltergeist2102
              </a>
            </p>
            <p className="text-sm text-primary">
              Snapchat:{" "}
              <a
                href="https://www.snapchat.com/add/skempwen"
                className="text-accent hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                skempwen
              </a>
            </p>
          </div>

          {/* Warning Message */}
          <p className="text-sm text-primary drop-shadow-lg max-w-md mx-auto">
            And listen up—don't even think about spamming her. I'm staying humble, but let's just say... I will know.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;