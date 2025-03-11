"use client";
import { useState, useEffect,useRef  } from "react";
import { motion, AnimatePresence,useScroll,useTransform } from 'framer-motion';
import styles from "./HeroSection.module.css"; // Import CSS Module
import Universite from "../assets/8ZLwsvOTvPSTMB0it1CLPuGLUI (1).avif";
import HEC from "../assets/AVRpTPTCNLqV8aen1CGgXRSga8.avif";
import Enlyon from "../assets/vrnrq0YOIG4Vg8PZaz8MIMa6D30.avif";
import Sorbonne from "../assets/ytRa0YyNcbsJeCQQrrrPoLinBU.avif";
import Insa from "../assets/YtK1bd35SfixaLbKFRwGHEV1Y.png";
import { TiStarFullOutline } from "react-icons/ti";
import { IoIosStarHalf } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled, { keyframes, css } from "styled-components";

const HeroSection = () => {
  
  const [index, setIndex] = useState(0);
  const badges = [
    { image: Universite },
    { image: HEC },
    { image: Enlyon },
    { image: Sorbonne },
    { image: Insa },
  ];
 



  const headings = [
    {
      text: "Créez des",
      span: "Notes structurées",
      after: "depuis",
      span2: "vos cours ",
      end: "avec L’IA",
    },
   
    {
      text: "Créez des",
      span: "Flashcards",
      after: "depuis",
      span2: "un PDF",
      end: "avec L’IA",
    },
     {
      text: "Créez des",
      span: "fiches de Révision",
      after: "depuis ",
      span2:"votre micro ",
      end: "avec L’IA",
    },
    
    {
      text: "Créez des",
      span: "Quiz",
      after: "depuis",
      span2: " une vidéo Youtube",
      end: "avec L’IA",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % headings.length);
    }, 2000); // Change every 1.5s
    return () => clearInterval(interval);
  }, []);
  // Multiply sets to create 40 copies for seamless animation
  const loopLogos = Array(40).fill(badges).flat();

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.9 } },
  };
  return (
    <section
      className={`relative justify-center pt-20 items-center w-full  bg-[#f4f2f1]`}
    >
      <div
        className={`relative z-10 flex flex-col items-center  w-full text-center   bg-[#f4f2f1] ${styles.bgGrid}`}
      >
<div className="mt-12 w-full px-4 md:w-[800px] min-h-[200px] md:min-h-[300px] relative overflow-hidden">
  <AnimatePresence mode="wait">
    <motion.h1
      key={index}
      className="text-[34px] md:text-[64px] font-bold leading-tight text-black mb-6 absolute"
      initial={{ y: 50, opacity: 0 }} // Start from bottom
      animate={{ y: 0, opacity: 1 }} // Move to top
      exit={{ y: -50, opacity: 0 }} // Exit upwards
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {headings[index].text}{" "}
      {index % 2 === 0 && <br />}
      <motion.span
        className="bg-gradient-to-r from-pink-600 to-pink-500 text-transparent bg-clip-text"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
      >
        {headings[index].span}{" "}
      </motion.span>
      {headings[index].after}{" "}
      <motion.span
        className="bg-gradient-to-r from-pink-600 to-pink-500 text-transparent bg-clip-text"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
      >
        {headings[index].span2}
      </motion.span>
      {headings[index].end}
    </motion.h1>
  </AnimatePresence>
</div>

        <div className="relative z-10  flex flex-col items-center text-center">
      
        <p className="text-[18px] w-[390px] md:w-[800px]  font-[500] px-5 text-[#3d3d3d]">
        🎓 <strong className="font-[700] ">Harvard, MIT, Stanford...</strong> <span className="font-[700]">Leurs étudiants ont un secret !</span>  
        Ils utilisent l’IA pour apprendre plus vite et mieux retenir leurs cours. Pourquoi pas toi ? 🚀
      </p>
     
      <div className="flex justify-center  items-center ">
      <div className="mt-4 px-2 w-[320px] lg:w-[400px] text-[13px] md:text-[17px]  font-[600] py-2 border border-gray-300 rounded-full">
      <span className="bg-gradient-to-r front-[500]  leading-[26px] from-pink-500 to-red-500 text-transparent bg-clip-text">150,000+</span> Quiz et fiches de révisions générés
      </div>
      </div>
      <button className="relative mt-7 md:mt-7  mb-0 lg:mb-2   px-4 py-3 font-semibold text-white rounded-lg shadow-md transition-all duration-300
  bg-gradient-to-r from-[#E92e6e]  to-[#fd045a]  group">
  <span className="absolute inset-0 bg-gray-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
  <span className="relative  font-[500] text-[17px] md:text-[18px]">  Essayer Gratuitement</span>
</button>
<div className="flex justify-center  items-center text-center">
        <div className=" z-10 w-full lg:w-[640px]  flex flex-col justify-center  items-center text-center">
          <div className="flex justify-center item-center ">
            <div className="flex items-center text-sm font-medium justify-center gap-2 text-gray-700">
              <div className="lg:flex  justify-center items-center  ">
                <div className="flex justify-center gap-1 items-center py-2">
                  <span className="text-lg font-[500]">G</span>

                 <div className="flex justify-between items-center">
                 <TiStarFullOutline className="text-[17px] text-black"/>
                 <TiStarFullOutline  className="text-[17px] text-black"/>
                 <TiStarFullOutline  className="text-[17px] text-black"/>
                 <TiStarFullOutline className="text-[17px] text-black"/>
                 <IoIosStarHalf className="text-[17px] text-black"/>
                 </div>
                </div>
                <span className="text-md font-medium"> 4.9/5</span>Basés sur les
                avis de <span className="text-md font-medium">13,145</span>{" "}
                étudiants
              </div>
            </div>
          </div>
         
        </div>
      </div>
      <h1 className="font-[500] text-[18px] mt-2 ">Utilisés par des étudiants de</h1>
    

<div className="relative w-[390px] md:w-full overflow-hidden mask-gradient">
<div className="absolute inset-0 pointer-events-none"></div>
         
          <Marquee>
            <MarqueeGroup>
              {badges.map((el) => (
                <ImageGroup>
                  <Image src={el.image} />
                </ImageGroup>
              ))}
            </MarqueeGroup>
            <MarqueeGroup>
              {badges.map((el) => (
                <ImageGroup>
                  <Image src={el.image} />
                </ImageGroup>
              ))}
            </MarqueeGroup>
          </Marquee>
          </div>

      


      </div>
    
        </div>
       

     
     
 
    </section>
  );
};

export default HeroSection;




const Marquee = styled.div`
  display: flex;
  width: 1000px;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0) 2%,
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;


const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;

`;