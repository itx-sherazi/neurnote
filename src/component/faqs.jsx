// import { useState } from "react";
// import { FiPlus, FiMinus } from "react-icons/fi";
// import { motion } from "framer-motion";

// const faqs = [
//   {
//     question: "C'est Gratuit ?",
//     answer:
//       "Vous pouvez utiliser Neuronote gratuitement ! Cependant, nous proposons également des plans payants abordables avec encore plus de fonctionnalités et sans aucune limite pour la version gratuite.",
//   },
//   {
//     question: "Comment ça fonctionne ?",
//     answer: "Activez le micro ou importez vos cours. Neuronote les analyse et génère automatiquement des fiches, flashcards et quiz pour vous entraîner. Simple et rapide !",
//   },
//   {
//     question: "Puis-je annuler mon abonnement ?",
//     answer: "Oui, vous pouvez annuler à tout moment depuis la section facturation de votre compte. Une fois annulé, aucun nouveau paiement ne sera effectué (sauf si vous vous réabonnez). Vous conserverez l’accès à votre compte jusqu’à la fin de votre période d’abonnement actuelle.",
//   },
//   {
//     question: "Avez-vous un programme d'affiliation ?",
//     answer: `Oui, bien sûr ! Nous avons un programme d’affiliation qui vous permet de gagner jusqu'à 30 % sur les abonnements de vos affiliés.
// Inscrivez-vous simplement sur notre plateforme, partagez votre lien, et commencez à gagner de l’argent !`,
//   },
//   {
//     question: "Puis-je utiliser Neuronote sur mon téléphone ?",
//     answer: `Oui, bien sûr ! Notre application est compatible avec les mobiles et les tablettes. Il vous suffit de visiter notre site via le navigateur de votre appareil.`,
//   },
// ];

// const FAQSection = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className=" mx-auto py-12  sm:px-6 md:px-[2rem] xl:px-[330px]">
//       <div className="text-center mb-8">
//         <span className="bg-white  text-[18px] font-[500] text-black px-3 py-1 rounded-full">FAQ</span>
//         <h2 className="text-[30px] md:[46px] lg:text-[52px] font-[600] mt-2 text-[#111111]">Foire aux Questions</h2>
//       </div>

//       <div className="space-y-4">
//   {faqs.map((faq, index) => (
//     <div
//       key={index}
//       className="border-b border-gray-300 pb-3 last:border-b-0"
//     >
//       <button
//         className="w-full flex justify-between   items-center text-[#1e1e1e] text-left text-[22px] font-[600] py-3"
//         onClick={() => toggleFAQ(index)}
//       >
//         {faq.question}
//         {openIndex === index ? <FiMinus className="text-black" /> : <FiPlus className="text-black" />}
//       </button>
//       <motion.div
//         initial={{ height: 0, opacity: 0 }}
//         animate={openIndex === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
//         transition={{ duration: 0.3, ease: "easeInOut" }}
//         className="overflow-hidden"
//       >
//         <p className="text-[#4c4c4c] text-[18px] font-[500] mt-2">{faq.answer}</p>
//       </motion.div>
//     </div>
//   ))}
// </div>
//       <div>
//       <div className=" bg-white rounded-lg py-6 my-8 px-5 flex flex-col md:flex-row justify-between items-center">
//         {/* Left Side - Text */}
//         <div className="text-center  md:text-left">
//           <h2 className=" text-[20px]  font-[600] text-gray-900">
//             Des questions ? Notre équipe est là pour vous aider ! 🤗
//           </h2>
//           <p className="text-[#808080] font-[500]  text-[17px] mt-2">
//           Contactez notre équipe pour toute question ou assistance.
//           </p>
//         </div>
  
//         {/* Right Side - Button */}
//         <div>
//         <button className="relative mt-4 md:mt-0 px-4 py-3  font-[500] text-[18px] text-white rounded-lg shadow-md transition-all duration-300
//   bg-gradient-to-r from-[#E92e6e] to-[#fd045a] group">
//   <span className="absolute inset-0  bg-gray-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
//   <span className="relative text-nowrap">Contactez Nous</span>
// </button>
//         </div>
       
//       </div>
//       </div>
//     </div>
//   );
// };

// export default FAQSection;
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { motion } from "framer-motion";

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

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full mx-auto py-12 px-4 md:px-6 lg:px-8"> {/* Full width kar diya */}
      <div className="text-center mb-8">
        <span className="bg-white text-[18px] font-[500] text-black px-3 py-1 rounded-full">
          FAQ
        </span>
        <h2 className="text-[30px] md:text-[46px] lg:text-[52px] font-[600] mt-2 text-[#111111]">
          Foire aux Questions
        </h2>
      </div>

      <div className="space-y-4 w-full"> {/* Full width */}
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 pb-3 last:border-b-0">
            <button
              className="w-full flex justify-between items-center text-[#1e1e1e] text-left text-[22px] font-[600] py-3"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }} // Plus icon animation
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {openIndex === index ? <FiMinus className="text-black" /> : <FiPlus className="text-black" />}
              </motion.div>
            </button>

            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={openIndex === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }} // Smooth open/close effect
              className="overflow-hidden"
            >
              <p className="text-[#4c4c4c] text-[18px] font-[500] mt-2">{faq.answer}</p>
            </motion.div>
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
