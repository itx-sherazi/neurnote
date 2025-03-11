
import Fiche from "../assets/1ENaZeeWaKCAjXOxDfaIhqFgDwg.avif"
import Vos from "../assets/Pdo6KWcbh3TYBppwK448z4YOvQ.avif"
import Qui from "../assets/T9YJrk14xbd7uFOEQY7EQCvpMM.avif"
import Quels from "../assets/8CTZCJdbQp01TzsHdKfs4y0k.avif"

const aiLearningSection = () => {
  return (
    <section className="py-12 bg-white text-center sm:px-6 md:px-[2rem] xl:px-[330px]">
      <div className=" mx-auto">
        <div className="flex justify-center items-center">
        <button className="flex items-center justify-center text-[18px] font-500 leading-[27px] gap-2 px-2 py-2 rounded-full shadow-md bg-white">
      <span className="  text-white rounded-sm ">
        ✅
      </span>
      <span className="text-black ">La Solution</span>
    </button>
        </div>
      


        <h2 className="text-[22px] md:text-[26px] lg:text-[33px] font-[600] text-[#111111] mt-2">
          Apprend mieux et plus rapidement, avec L'IA.
        </h2>
        <p className=" text-[17px] font-[500] text-[#4c4c4c] mt-2">
          Étudiez sans stress en transformant vos notes en quiz interactifs et flashcards
          pour mieux mémoriser et gagner en confiance.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
      {/* First Row */}
      <div className="grid grid-cols-12  w-full gap-3 lg:gap-10">
        <div className="col-span-12 md:col-span-6  items-center text-center">
        <div className="flex justify-center items-center">
            <div>
            <img
            src={Vos}
            alt="First img"
            priority // Ensures images load properly
            className="p-0  lg:p-10 "
          />
          <h2 className={`font-[800]  text-[20px] text-[#333333] leading-[36px] text-start mt-4 `}>Arrête de prendre des notes, concentre toi sur ton cours.</h2>
          <p className="text-[17px]  font-[600] mt-2 text-start text-[#888888]">Neuronote enregistre et transcrit l'audio du cours en une fiche parfaitement structuré </p>
            </div>
          </div>
          
        </div> 
        <div className="col-span-12 md:col-span-6  items-center text-center">
        <div className="flex justify-center items-center">
            <div>
            <img
            src={Fiche}
            alt="Second img"
            
            priority
            className="p-0 lg:p-10"
          />
          <h2 className={`font-[800]  text-[20px] text-[#333333] leading-[36px] text-start mt-4 `}>Importe tes cours depuis Youtube, un PDF, ou un fichier audio.</h2>
          <p className="text-[17px]  font-[600] mt-2 text-start text-[#888888]">Nous transformons les cours importés en une fiche de révision parfaitement structuré</p>
            </div>
          </div>
         
        </div>
      </div>
      {/* Second Row */}

      <div className="grid grid-cols-12  w-full gap-3 mt-20 lg:gap-10">
        <div className="col-span-12 md:col-span-6  items-center text-center">
        <div className="flex justify-center items-center">
            <div>
            <img
             src={Qui}
            alt="Third img"
          
            priority // Ensures images load properly
            className="p-0 lg:p-10"
          />
          <h2 className={`font-[800]  text-[20px] text-[#333333] leading-[36px] text-start mt-4 `}>Arrête de prendre des notes, concentre toi sur ton cours.</h2>
          <p className="text-[17px]  font-[600] mt-2 text-start text-[#888888]">Neuronote enregistre et transcrit l'audio du cours en une fiche parfaitement structuré </p>
            </div>
          </div>
          
        </div> 
        <div className="col-span-12 md:col-span-6  items-center text-center">
        <div className="flex justify-center items-center">
            <div>
            <img
            src={Quels}
    alt="Fourth img"
           
            priority
            className="p-0 lg:p-10"
          />
          <h2 className={`font-[800]  text-[20px] text-[#333333] leading-[36px] text-start mt-4 `}>Importe tes cours depuis Youtube, un PDF, ou un fichier audio.</h2>
          <p className="text-[17px]  font-[600] mt-2 text-start text-[#888888]">Nous transformons les cours importés en une fiche de révision parfaitement structuré</p>
            </div>
          </div>
         
        </div>
      </div>
    </div>

    </section>
  );
};

export default aiLearningSection;
