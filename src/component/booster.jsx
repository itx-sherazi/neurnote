
import { motion, useScroll, useTransform } from "framer-motion";
import styled, { keyframes, css } from "styled-components";
import NouvelleNote from "../assets/MLJrXgN3xMU5IbPdQlm0astboM.avif"
import NouvelleNoteAvec from "../assets/adfHYJnukFS99w5TS4Ew9UHVYo.avif"
import Depuis from "../assets/hFnhbjwZqGKa4VCjcjMKjrXaM.avif"
import { FaRegFolderOpen , } from "react-icons/fa";
import { PiUserCirclePlusBold } from "react-icons/pi";
import { LuAlarmClock } from "react-icons/lu";
import { GoTag } from "react-icons/go";
import { useRef } from "react";

const badges = [
  { text: "Un Site Web", color: "bg-blue-500" },
  { text: "Wikipedia", color: "bg-purple-500" },
  { text: "Un PDF", color: "bg-red-500" },
  { text: "Votre Micro", color: "bg-yellow-500" },
  { text: "Youtube", color: "bg-purple-500" },
  { text: "Un Site Web", color: "bg-blue-500" },
  { text: "Wikipedia", color: "bg-purple-500" },
  { text: "Un PDF", color: "bg-red-500" },
  { text: "Votre Micro", color: "bg-yellow-500" },

];

export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const leftY = useTransform(scrollYProgress, [0, 1], [200, -50]);
  const rightY = useTransform(scrollYProgress, [0, 1], [200, -50]);
  const features = [
    {
      icon: <FaRegFolderOpen />,
      title: "Stockez vos cours",
      description:
        "Gardez vos cours en sécurité dans notre application, accédez-y facilement et entraînez-vous à tout moment, où que vous soyez.",
    },
    {
      icon: <PiUserCirclePlusBold />,
      title: "Prise de note du cours automatique avec L'IA",
      description:
        "Activez le micro, Neuronote écoute et prend des notes pour vous en temps réel.",
    },
    {
      icon: <LuAlarmClock />,
      title: "Créez des Quiz basés sur vos cours",
      description:
        "Testez vos connaissances sans limite grâce à des quiz interactifs.",
    },
    {
      icon: <GoTag />,
      title: "Générez des fiches de révision parfaite et des flashcards",
      description:
        "Pour réviser efficacement et organiser vos idées en un clin d’œil.",
    },
  ];

  
  return (
    <div className="bg-[#111111] text-white">
    <div className=" py-12 sm:px-6 md:px-[2rem] xl:px-[330px] text-center">
      {/* Header Section */}
      <div className="flex flex-col items-center">
     <button className="relative  py-[1px] text-white font-semibold rounded-full border-2 border-transparent bg-black">
  <span className="absolute inset-0 rounded-full bg-gradient-to-b from-red-500 via-orange-500 to-purple-500"></span>
  <span className="relative bg-[#1e1e1e] block px-3 text-[16px] font-[500]  py-2 rounded-full">Découvrez Neuronote</span>
</button> 
<div className="w-[300px] md:w-[600px] flex  leading-[50px] justify-center items-center">
<h1 className="text-[28px] md:text-[40px] leading-[35px] md:leading-[62px] lg:text-[52px]  font-[600] mt-4">L&apos;IA pour booster tes notes.</h1>

</div>
 <button className="relative mt-4 md:mt-7 px-5 py-4  text-white rounded-lg shadow-md transition-all duration-300
  bg-gradient-to-r from-[#E92e6e] to-[#fd045a]  group">
  <span className="absolute inset-0 bg-gray-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
  <span className="relative text-[18px] leading-[27px] font-[500]">  Essayer Gratuitement</span>
</button>
      </div>
      <div ref={containerRef} className="flex justify-center items-center">
      <div className="relative hidden mt-10 md:flex justify-center">
        {/* Left Floating Image */}
        <motion.div
          animate={{ opacity: 1, x: 0, rotate: 5 }}
          style={{ y: leftY }} // Applying scroll effect
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute lg:-left-[5rem] md:-left-[1rem] top-10 z-10 lg:top-28 md:w-[10rem] lg:w-[15rem] h-[400px]"
        >
          <img src={Depuis} alt="Left floating card" className="w-64 md:w-[12rem] lg:w-[21rem]" width={100} height={100} />
        </motion.div>

        {/* Main Dashboard Image */}
        <div className="relative">
          <img src={NouvelleNote} alt="Main dashboard" className="max-w-full  h-auto md:w-[712px] lg:w-[1000px]" width={1100} height={400} />
        </div>

        {/* Right Floating Image */}
        <motion.div
          animate={{ opacity: 1, x: 0, rotate: -4 }}
          style={{ y: rightY }} // Applying scroll effect
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute lg:-right-[5rem]  md:-right-[2rem] top-5 lg:top-28 md:w-[10rem] lg:w-[21rem] h-[460px]"
        >
          <img src={NouvelleNoteAvec} alt="Right floating card" className="max-w-full  h-auto" width={1800} height={1700} />
        </motion.div>
      </div>
    </div>
    </div>

    <div className="text-white pt-12 pb-3 p-5 bg-black">
      {/* Features Grid */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex border-t border-[#1e1e1e] justify-center items-center ${
              index !== 3 ? "lg:border-r border-[#1e1e1e]" : ""
            }`}
          >
            <div
              className={`${
                index === 0 ? "lg:pl-0 py-6 pr-6 md:pl-0 lg:p-6" : "md:py-6 lg:p-6 md:pr-0 sm:py-6"
              } h-[260px] space-y-3`}
            >
              <div className="text-white font-[400] text-[30px]">
                {feature.icon}
              </div>
              <h3 className="font-[600] leading-[30px] text-start text-[20px] md:text-[18px] lg:text-[20px]">
                {feature.title}
              </h3>
              <p className="text-[#808080] font-[500] leading-[26px] text-[18px] md:text-[16px] lg:text-[17px] text-start">
                {feature.description}
              </p>
            </div>
          </div>
        ))}

        {/* Vertical Gradient Line */}
        <div className="hidden lg:block absolute top-0 bottom-0 left-1/2  transform -translate-x-1/2 w-[2px] bg-gradient-to-b from-orange-500 via-pink-500 to-purple-500"></div>
      

      </div>

      {/* Divider with Button and Full Horizontal Line */}
      <div className="relative flex items-center justify-between w-full mt-6">
        {/* Left Line + Dot */}
        <div className="flex items-center w-full max-w-4xl">
          <div className="w-full h-[1px] bg-[#1e1e1e]"></div>
          <div className="w-1.5 h-1.5 bg-[#1e1e1e] rounded-full ml-2"></div>
        </div>

        {/* Center Button with Gradient Border */}
        <div className="relative flex items-center justify-center mx-4">
          {/* Top Gradient Border */}
          <div className="absolute z-10 top-0 left-1/2 transform -translate-x-1/2 w-[70%] h-[2px] bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500"></div>

          {/* Button */}
          <button className="relative px-[1px] py-[1px] text-white font-semibold rounded-full border border-[#1e1e1e]">
            <span className="absolute inset-0 rounded-full bg-[#1e1e1e]"></span>
            <span className="relative text-nowrap bg-[#1e1e1e] block px-3 text-[16px] py-2 rounded-full">
              Importez vos cours depuis :
            </span>
          </button>
        </div>

        {/* Right Line + Dot */}
        <div className="flex items-center justify-end w-full max-w-3xl">
          <div className="w-1.5 h-1.5 bg-[#1e1e1e] rounded-full mr-2"></div>
          <div className="w-full h-[1px] bg-[#1e1e1e]"></div>
        </div>
      </div>

    </div>

    <div className="relative w-full pb-20 overflow-hidden">
    <Marquee>
      <MarqueeGroup>
        {badges.map((el, index) => (
          <ImageGroup key={index}>
            <div className={`${el.color} w-2 h-2 rounded-full`}></div>
            <p className="text-nowrap ">{el.text}</p>
          </ImageGroup>
        ))}
      </MarqueeGroup>
      <MarqueeGroup>
        {badges.map((el, index) => (
          <ImageGroup key={`dup-${index}`}>
            <div className={`${el.color} w-2 h-2 rounded-full`}></div>
            <p className="text-nowrap ">{el.text}</p>
          </ImageGroup>
        ))}
      </MarqueeGroup>
    </Marquee>
  </div>
    </div>
  );
}


const scrollX = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;
const Marquee = styled.div`
  display: flex;
  width: 90%; /* Adjust width here */
  overflow: hidden;
  user-select: none;
  position: relative;
  justify-content: center; /* Ensures equal distribution */

  mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0) 5%,  /* Adjusted left fade */
    rgba(0, 0, 0, 1) 20%, /* Ensures proper visibility */
    rgba(0, 0, 0, 1) 80%, /* Ensures proper visibility */
    rgba(0, 0, 0, 0) 95%  /* Adjusted right fade */
  );
`;


const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 16px;
  white-space: nowrap;
  width: max-content;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;

const ImageGroup = styled.div`
  display: flex;
  align-items: center;
  background: #1e1e1e;
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
  gap: 10px;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${(props) => props.color || "#ff4757"};
`;

const Image = styled.img`
  object-fit: contain;
  width: 100px;
  height: 100px;
  border-radius: 8px;
`;