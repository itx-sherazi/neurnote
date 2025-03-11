import { useEffect, useState, useRef } from "react";
import { Gamepad2, Sparkles } from "lucide-react";
import { faRunning, faBrain } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Arrow from "../assets/QoTZyI7CkM97mFm0elr4g0yNc.svg";
import Light from "../assets/8BXeBQObnslmzSi9htBC7WTLXM.svg";

const baseTexts = [
  { text: "Plus efficacement", icon: () => <FontAwesomeIcon icon={faBrain} /> },
  { text: "Plus Rapidement", icon: () => <FontAwesomeIcon icon={faRunning} /> },
  { text: "Ludiquement", icon: () => <Gamepad2 size={50} className="text-inherit" /> },
  { text: "Grâce à L'IA", icon: () => <Sparkles size={50} className="text-inherit" /> },
];

export default function ScrollingTextEffect() {
  const [items, setItems] = useState([...baseTexts, ...baseTexts, ...baseTexts, ...baseTexts]); 
  const scrollRef = useRef(null);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const totalItems = baseTexts.length;
  const intervalRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight - 320, behavior: "instant" }); 
    }

    const scroll = () => {
      if (!scrollRef.current) return;

      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      const itemHeight = 64; 
      const newScrollTop = scrollTop - itemHeight; 

      if (newScrollTop <= clientHeight * 2) {
        setItems((prevItems) => [...baseTexts, ...prevItems]); 
        scrollRef.current.scrollTo({ top: newScrollTop + baseTexts.length * itemHeight, behavior: "instant" }); 
      } else {
        scrollRef.current.scrollTo({ top: newScrollTop, behavior: "instant" }); 
      }

      // calculate Highlighted index 
      const middlePosition = newScrollTop + clientHeight / 2 - itemHeight / 2;
      const newIndex = Math.round(middlePosition / itemHeight) % totalItems;
      setHighlightedIndex(newIndex);
    };

    intervalRef.current = setInterval(scroll, 1700);

    return () => clearInterval(intervalRef.current);
  }, []);

  

  return (
    <div className="relative flex justify-center items-center h-[430px] md:h-[500px] bg-[#F1F0EE] px-6 md:px-[2rem] xl:px-[100px]">
    <div className="grid grid-cols-12 w-full lg:items-center justify-start lg:justify-center">
      {/* Left Column */}
      <div className="col-span-12 lg:col-span-6 flex flex-col justify-center mr-5">
        <div className="block lg:hidden text-start lg:text-center ">
          <h1 className="text-2xl md:text-9xl -mt-2 font-[600]">
            Apprend
          </h1>
        </div>
        <div className="relative hidden lg:flex flex-col h-[340px] text-[40px] lg:text-[55px] font-semibold text-black space-x-2 justify-center">
          <div className=" flex justify-end items-end">
            <span className="relative apprend-span">
              Apprend
              <img src={Light} alt="icon" className="absolute -top-3 -left-3 w-8 h-8" />
            </span>
            <span className="apprend-span"> tes </span>
            <span className="relative apprend-span">
              cours
              <img src={Arrow} alt="icon" className="absolute -top-24 -right-3 w-[150px] h-[150px]" />
            </span>
          </div>
        </div>
      </div>
  
      {/* Right Column */}
      <div className="relative col-span-12 lg:col-span-6 flex items-center lg:justify-center justify-start h-[320px] l">
        <div className="h-full flex items-center mask-gradient-main justify-start overflow-hidden">
          <div
            id="scrollableDiv"
            ref={scrollRef}
            className="w-full "
            style={{ height: "320px", overflowY: "hidden" }}
          >
            {items.map((item, index) => {
              const isHighlighted = index % totalItems === highlightedIndex;
              return (
                <div key={index} className="framer-1mvu08j flex items-center justify-start" style={{ height: "64px" }}>
                  <h2
  className={`framer-text flex items-center gap-3 transition-colors text-left ${
    isHighlighted ? "text-pink-500" : "text-gray-400"
  }`}
>

                    <span className="text-[20px] font-[600] md:text-5xl">{item.text}</span>
                    {typeof item.icon === "function" ? (
                      item.icon()
                    ) : (
                      <item.icon size={50} className="text-inherit" />
                    )}
                  </h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  
    <style jsx>{`
      .mask-gradient-main {
        -webkit-mask-image: linear-gradient(to top, transparent, #f1f0ee 20%, #f1f0ee 80%, transparent);
        mask-image: linear-gradient(to top, transparent, #f1f0ee 20%, #f1f0ee 80%, transparent);
      }
      .framer-text {
        font-size: 32px;
        line-height: 64px;
        font-weight: 600;
        white-space: nowrap;
        overflow: visible;
        transition:  color 1s ease, opacity 1s ease;;
      }
      @media (min-width: 1024px) {
        .framer-text {
          font-size: 48px;
        }
      }
      #scrollableDiv::-webkit-scrollbar {
        display: none;
      }
      #scrollableDiv {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    `}</style>
  </div>
  );
}