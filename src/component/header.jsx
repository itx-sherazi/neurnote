import { useState, useEffect,useRef  } from "react";
import logo from "../assets/gzOid831qGu5Xep1PdtkxK5nZI.avif";
import BurgerIcon from "../assets/QYFES9JKI572pXuWEVAUGZwjMM.svg";
import { motion } from "framer-motion";

export default function Header() {
  const modalRef = useRef(null);
  const [scrolling, setScrolling] = useState(false);
  const [navItems, setNavItems] = useState([
    "Affiliation",
    "Notre histoire",
    "Nous recrutons",
  ]);

  const [isOpen, setIsOpen] = useState(false);
 

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.style.transform = "translateY(-20px)";
      modalRef.current.style.opacity = "0";
      setTimeout(() => setIsOpen(false), 300); // Animation delay
    }
  };

    const handleScroll = () => {
      window.scrollBy({ top: window.innerHeight * 0.20, behavior: "smooth" });
    };
 

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
        setNavItems(["Nous recrutons", "Affiliation", "Notre histoire"]); // Swap positions
      } else {
        setScrolling(false);
        setNavItems(["Affiliation", "Notre histoire", "Nous recrutons"]); // Original order
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`w-full px-5  bg-[#f4f2f1] `}> {/* 🔥 Ye color same rahega */}
      <div
        className={`fixed top-0 left-1/2 transform -translate-x-1/2 ${
          scrolling ? "max-w-5xl justify-center flex items-center  lg:translate-y-3 shadow-md    lg:bg-white md:bg-white " : "max-w-6xl  py-5  md:bg-[#f4f2f1]  lg:bg-[#f4f2f1] sm:bg-white  bg-gray-700"
        } w-full flex justify-between items-center  transition-all duration-300 z-50  lg:rounded-lg md:rounded-none lg:py-4 md:py-7   px-6 bg-[#f4f2f1] py-1  `} 
      >
        <motion.div
      whileTap={{ scale: 0.9 }} // Click effect
      onClick={handleScroll} // Scroll on click
      className="cursor-pointer"
    >
      <img 
        src={logo} 
        alt="Logo" 
        width={150} 
        height={120} 
        className="w-[150px]"
      />
    </motion.div>
        <div className=" hidden md:flex ">
        <motion.ul
            className={`flex justify-between items-center text-nowrap cursor-pointer font-[500] ${
              scrolling ? "w-[500px]" : "md:w-[450px] lg:w-[638px]"
            }`}
            animate={{ opacity: [0, 1], x: scrolling ? [10, 0] : [0, 10] }} // 🔄 Smooth transition
            transition={{ duration: 0.7 }}
          >
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                className="text-[#808080] font-[500] text-[18px]"
                animate={{opacity: [0, 1], y: scrolling ? [0, 0] : [0, 5] }} // 🌀 Smooth move
                transition={{ duration: 0.7 }}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>
        <div className=" hidden lg:block">
          <button className="bg-gradient-to-r text-white rounded-lg font-[500] px-3 py-3 text-[16px] from-[#e83371] to-[#ff0058] hover:bg-gray-800 float-right">
            Essayer Gratuitement
          </button>
        </div>
        <div className=" flex md:hidden ">
          <div className="px-[13px] py-[13px] text-sm  rounded-lg bg-gradient-to-r from-[#e83371] to-[#ff0058] hover:bg-gray-800 float-right">
          <button className="  text-white  ">
            Essai
          </button>
          </div>
        
        </div>
        <div onClick={openModal} className=" flex lg:hidden">
          <div className="bg-black flex justify-center md:justify-end items-center rounded-lg">
            <img src={BurgerIcon} alt="burger" className="h-10 w-10 p-1" height={100} width={100} />
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          ref={modalRef}
          className="fixed top-[6rem] right-[1rem] z-40  bg-white shadow-lg rounded-lg w-54 p-4"
        >
          <ul className="space-y-5 md:block hidden text-black font-medium">
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>About</li>
            <li>Comparison</li>
            <li>404</li>
          </ul>
          <ul className="space-y-5 block md:hidden w-[170px] text-black font-medium">
            <li>Notre HIstoire</li>
            <li>Nous recrutons</li>
            <li>Contactez-nous</li>
           
          </ul>

          <div className="mt-4 space-y-2 md:block hidden ">
            <button className="w-full border border-black py-2 rounded-md">Join Waitlist</button>
            <div className="px-[13px] py-[13px] text-sm w-full rounded-lg bg-gradient-to-r from-[#e83371] to-[#ff0058] hover:bg-gray-800 float-right">
          <button className="  text-white  ">
            Contact Us 
          </button>
          </div>
          </div>
          <div className="mt-4 space-y-2 block md:hidden ">
            <div className="px-[13px] py-[13px] text-sm w-full rounded-lg bg-gradient-to-r from-[#e83371] to-[#ff0058] hover:bg-gray-800 float-right">
          <button className="  text-white  ">
            Essai Gratuiy
          </button>
          </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
