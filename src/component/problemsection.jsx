import { RiBookLine } from "react-icons/ri";
import { PiBrainLight } from "react-icons/pi";
import { PiSmileyNervousDuotone } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
export default function ProblemSection() {
  const cards = [
    {
      icon: <RiBookLine className="text-red-500  text-[60px]" />,
      title: "Mauvaise gestion des notes",
      description:
        "Les étudiants croulent sous des piles de notes, ayant du mal à les organiser et à les réviser efficacement.",
    },
    {
      icon: <PiBrainLight className="text-purple-500 text-[60px]" />,
      title: "Faible rétention des informations",
      description:
        "Malgré des heures passées à réviser, de nombreux étudiants constatent qu’ils ne retiennent qu’une fraction des informations.",
    },
    {
      icon: <PiSmileyNervousDuotone className="text-green-500 text-[60px]" />,
      title: "Des révisions interminables",
      description: "Et si la clé était d’apprendre mieux, pas plus ?",
    },
    {
      icon: <IoSearch className="text-orange-500 text-[60px]" />,
      title: "Absence de suivi des progrès",
      description:
        "Sans outils pour suivre leurs progrès, les étudiants ignorent s’ils s’améliorent, ce qui limite leur efficacité.",
    },
  ];
  return (
    <section className=" text-center bg-[#F6F5F4]">
      {/* Title and Description */}
      <div className="  py-16 px-5 sm:px-6   md:px-16 xl:px-[330px] mx-auto">
        <span className="bg-white shadow-md px-3 py-2 rounded-full text-[18px] font-[500] leading-[27px] inline-flex items-center">
          🚨 Le Problème
        </span>
        <h2 className="text-[20px] md:text-[26px] lg:text-[33px]  leading-[46px] font-[700] mt-4">
          70 % des étudiants perdent du temps  avec des méthodes inefficaces
        </h2>
        <p className="text-[17px]  leading-[26px] text-[#545454] font-[500]   mt-4">
          Submergés d’informations, les étudiants peinent à retenir l’essentiel,
          accumulent du stress et s’épuisent avec des méthodes de révision dépassées.
        </p>
      </div>

      {/* 4-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4   mx-auto">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`flex flex-col items-center  py-7 px-8  text-center ${
            index % 2 === 0 ? "md:border-r border-gray-300" : ""
          }`}
        >
          {card.icon}
          <h3 className="text-[20px] leading-[30px]  font-[600] mt-3">{card.title}</h3>
          <p className="text-[#4c4c4c] font-[500] text-[17px] mt-2">{card.description}</p>
        </div>
      ))}
    </div>
    </section>
  );
}

