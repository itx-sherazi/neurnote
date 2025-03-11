import myImage from "../assets/Gf76uoPWoHWiNn4y2jc4c2Q7jPs.avif";
import { FaInstagram } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#111111]   pt-10 max-h-fit sm:px-6 md:px-[2rem] xl:px-[330px]">
      <div className="">
        <div className="grid grid-cols-12 mt-3 lg:mt-14 space-y-16 md:space-y-10 lg:space-y-0 gap-18 ">
          <div className="md:flex sm:border-b lg:border-b-0 pb-12 lg:pb-0 border-gray-700 lg:block justify-between  col-span-12 md:col-span-12 lg:col-span-5">
            <div className="flex  items-center space-x-2 ">
              <div className="sm:h-[100px] sm-w-[100px] md:h-[150px] md:w-[115px] lg:h-[130px]   lg:w-[95px]">
                <img src={myImage} alt="Logo" className="  w-full h-full" />
              </div>

              <span
                className={`text-[20px]  text-[#7d7d7d] font-[600] `}
              >
                Développé avec ❤️ à Lyon
              </span>
            </div>
            <div>
            <button className="flex items-center justify-center mt-10   gap-1 w-full md:w-[290px]  py-3 text-[#7c7c7c] border border-gray-700 rounded-md text-[17px] transition">
              <MdOutlineMail className="text-[18px]" /> contact@neuronote.app{" "}
              <FaArrowRight className="hover:ml-[2px] translate-x-1 duration-75" />
            </button>
            </div>
            
          </div>

          <div className="space-y-2  col-span-12 md:col-span-8 lg:col-span-5 ">
            <h3 className=" text-white mb-3 text-[20px] font-[600] ">
              Accueil
            </h3>
            <ul className={`space-y-1 `}>
              <li>
                <a
                  href="#"
                  className="hover:text-white text-[18px]  font-[500] text-[#7c7c7c]"
                >
                  Notre Histoire
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white font-[500] text-[18px] text-[#7c7c7c]"
                >
                  Nous Recrutons
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-0 justify-between md:space-y-3 flex md:block  col-span-12 md:col-span-4 lg:col-span-2  ">
            <h3 className=" text-white mb-3 text-[20px] font-[600]">
              Retrouvez nous
            </h3>
            <div>
            <button className="flex items-center text-[#7c7c7c] font-[500] text-[20px] md:text-[17px] gap-2 px-2 py-2 bg-[#1e1e1e] rounded-md">
              <FaInstagram className="text-[24px] font-[500]  lg:text-[17px]"/> <span className="hidden sm:block">Instagram</span>
            </button>
            </div>
           
          </div>
        </div>

        <div className="border-t hidden lg:flex border-gray-700 mt-20 py-6  flex-col md:flex-row justify-between text-gray-400">
          <div className="grid grid-cols-1  md:flex text-[17px] justify-between items-center font-[500] cursor-pointer w-full gap-6 md:gap-3 text-center md:text-left">
  <p className="text-[#7c7c7c] text-nowrap hover:text-white">© 2025 Neuronote. Tous droits réservés.</p>
  <a href="#" className="text-[#7c7c7c] hover:text-white text-nowrap">Mention Légale</a>
  <a href="#" className="text-[#7c7c7c] hover:text-white text-nowrap">CGV</a>
  <a href="#" className="text-[#7c7c7c] hover:text-white text-nowrap">Politique de Confidentialité</a>
</div>
        </div>
        <div className="border-t  lg:hidden  border-gray-700 mt-20 py-6 flex flex-col md:flex-row justify-between text-gray-400">
          <div className="grid grid-cols-1 md:flex text-[17px] justify-between items-center font-[500] cursor-pointer w-full gap-6 md:gap-4 text-center md:text-left">
          <a href="#" className="text-[#7c7c7c] text-nowrap">Mention Légale</a>
  <p className="text-[#7c7c7c] text-nowrap hover:text-white">© 2025 Neuronote. Tous droits réservés.</p>
  <a href="#" className="text-[#7c7c7c] text-nowrap hover:text-white">CGV</a>
  <a href="#" className="text-[#7c7c7c] text-nowrap hover:text-white">Politique de Confidentialité</a>
</div>
        </div>
      </div> 
    </footer>
  );
};

export default Footer;
