


import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    question: "C'est Gratuit ?",
    answer:
      "Vous pouvez utiliser Neuronote gratuitement ! Cependant, nous proposons également des plans payants abordables avec encore plus de fonctionnalités et sans aucune limite pour la version gratuite.",
  },
  {
    question: "Comment ça fonctionne ?",
    answer:
      "Activez le micro ou importez vos cours. Neuronote les analyse et génère automatiquement des fiches, flashcards et quiz pour vous entraîner. Simple et rapide !",
  },
  {
    question: "Puis-je annuler mon abonnement ?",
    answer:
      "Oui, vous pouvez annuler à tout moment depuis la section facturation de votre compte. Une fois annulé, aucun nouveau paiement ne sera effectué (sauf si vous vous réabonnez). Vous conserverez l’accès à votre compte jusqu’à la fin de votre période d’abonnement actuelle.",
  },
  {
    question: "Avez-vous un programme d'affiliation ?",
    answer: `Oui, bien sûr ! Nous avons un programme d’affiliation qui vous permet de gagner jusqu'à 30 % sur les abonnements de vos affiliés.
Inscrivez-vous simplement sur notre plateforme, partagez votre lien, et commencez à gagner de l’argent !`,
  },
  {
    question: "Puis-je utiliser Neuronote sur mon téléphone ?",
    answer: `Oui, bien sûr ! Notre application est compatible avec les mobiles et les tablettes. Il vous suffit de visiter notre site via le navigateur de votre appareil.`,
  },
];



const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [open, setOpen] = useState(false);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const styles = {
    container: {
        cursor: "pointer",
        display: "inline-block",
    },
    icon: {
        transition: "transform 0.3s ease-in-out", // Smooth animation
    },
};
  return (
 
        <div className="w-full mx-auto py-12 px-4 md:px-6 lg:px-8">
          {/*... (header remains same)*/}
    
          <div className="space-y-4 w-full">
          {faqs.map((faq, index) => (
        <div key={index} className="border-b">
          <button
            onClick={() => toggleFAQ(index)}
            className="flex justify-between items-center bg-[#F1F0EE] w-full p-4 text-left text-lg font-semibold  transition duration-200"
          >
            {faq.question}
            <span
              className={`text-gray-500 transition-transform duration-300 ${
                openIndex === index ? "rotate-[180deg]" : "rotate-0"
              }`}
            >
              {openIndex === index ? <FiMinus /> : <FiPlus />}
            </span>
          </button>
          {openIndex === index && (
            <div className="p-4 text-gray-700 bg-[#F1F0EE] transition-all duration-200">{faq.answer}</div>
          )}
        </div>
      ))}
          </div>
    
      
      {/* Contact Section */}
      <div className="bg-white rounded-lg py-6 my-8 px-5 flex flex-col md:flex-row justify-between items-center w-full">
        <div className="text-center md:text-left">
          <h2 className="text-[20px] font-[600] text-gray-900">
            Des questions ? Notre équipe est là pour vous aider ! 🤗
          </h2>
          <p className="text-[#808080] font-[500] text-[17px] mt-2">
            Contactez notre équipe pour toute question ou assistance.
          </p>
        </div>

        <button className="relative mt-4 md:mt-0 px-4 py-3 font-[500] text-[18px] text-white rounded-lg shadow-md transition-all duration-300 bg-gradient-to-r from-[#E92e6e] to-[#fd045a] group">
          <span className="absolute inset-0 bg-gray-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="relative text-nowrap">Contactez Nous</span>
        </button>
      </div>
    </div>
  );
};

export default FAQSection;


