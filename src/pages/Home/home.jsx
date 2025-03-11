

import Apprend from "../../component/apprend"

import Header from "../../component/header";
import Herosection from "../../component/herosection"
import ProblemSection from "../../component/problemsection"
import AiLearningSection from "../../component/ailearningsection"
import Booster from "../../component//booster"
import FAQs from "../../component/faqs"
import Footer from '../../component/footer'


function Page() {
  return (
    <div className="bg-[#F1F0EE] ">

  <Header />
  <Herosection/>
  <ProblemSection/>
  <AiLearningSection/>
  <Apprend/>   
  <Booster/> 
  <FAQs/>  
  <Footer/> 
    </div>

  )
}

export default Page
