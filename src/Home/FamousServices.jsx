import couple from "./superimages/couple.png"
import support from "./superimages/support.png"
import rail from "./superimages/rail.png"
import bill from "./superimages/tower.png"
import bus from "./superimages/bus.png"
import birth from "./superimages/document.png"
import fire from "./superimages/firefighter.png"
import { Typewriter } from "react-simple-typewriter"


const Card = ({ title, description, link, imageUrl }) => {
    return (
      <div className="p-4 border rounded-lg bg-white">
        <img src={imageUrl} alt={title} className="w-20 h-20 mx-auto mb-4 rounded-xl" />
        <a href={link} className="block mb-2 font-bold text-xl text-center">{title}</a>
        <p className="text-center">{description}</p>
        
      </div>
    );
  };
const FamousServices = () => {
    return (
        <>
        <p className="mt-10 mb-10 font-bold text-3xl text-center text-[#00AC61]">
        <Typewriter
          words={['জনপ্রিয় সেবা']}
          loop={3}
          cursor
          cursorStyle='_'
          typeSpeed={200}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </p>
         <div className="grid  grid-cols-2 gap-5  bg-slate-200 p-5 sm:grid-cols-3 ps-5 pe-5   ">
           <Card
              imageUrl={bill}
             title="বিদ্যুৎ বিল"
             link="https://postpaid.nesco.gov.bd/"
           />
           <Card
            imageUrl={support}
             title="ভোক্তা অধিকার অধিদপ্তর"
             link="tel:16121"
           />
           <Card
            imageUrl={couple}
             title="বয়স্ক ভাতা মঞ্জুরির আবেদনপত্র "
             link="https://www.mygov.bd/services/info?id=BDGS-1533028690"
           />
           <Card
            imageUrl={rail}
             title="ট্রেন টিকেট"
             link="https://eticket.railway.gov.bd/en"
           />
           <Card
            imageUrl={bus}
             title="বাস টিকেট"
             link="tel:01719215939"
           />
           <Card
            imageUrl={birth}
             title="জন্ম ও মৃত্যু নিবন্ধন"
             link="https://bdris.gov.bd/br/application"
           />
           <Card
            imageUrl={fire}
             title="দমকল বাহিনী"
             link="tel:01901022313"
           />
         </div>
        </>
       );
     };

export default FamousServices;