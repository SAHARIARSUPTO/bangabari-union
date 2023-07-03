import education from "./images/education.png"
import hospitals from "./images/hospital.png"
import internet from "./images/internet.png"
import mosque from "./images/mosque.png"
import police from "./images/police.png"
import sprout from "./images/sprout.png"
import tower from "./images/tower.png"
import bus from "./images/bus.png"



const Card = ({ title, description, link, imageUrl }) => {
    return (
      <div className="p-4 border rounded-lg hover:bg-slate-50">
        <img src={imageUrl} alt={title} className="w-20 h-20 mx-auto mb-4 rounded-xl" />
        <a href={link} className="block mb-2 font-bold text-xl text-center">{title}</a>
        <p className="text-center text-sm sm:text-xl">{description}</p>
        
      </div>
    );
  };

const Services = () => {
  return (
   <><p className="mt-10 mb-10 font-bold text-3xl text-center text-[#00AC61]">সেবাসমূহ</p>
    <div className="grid  grid-cols-2 gap-5  sm:grid-cols-3 ps-5 pe-5   ">
      <Card
         imageUrl={education}
        title="শিক্ষা প্রতিষ্ঠান"
        description="সরকারী তথ্যমতে এখানে ১৪টি প্রাথমিক বিদ্যালয়, ৫টি মাধ্যমিক বিদ্যালয়, একটি উচ্চ মাধ্যমিক কলেজ, ১টি কারিগরি কলেজ এবং ৩ টি মাদ্রাসা আছে।"
      />
      <Card
       imageUrl={hospitals}
        title="স্বাস্থ্যসেবা"
        description="স্বাস্থ্যসেবা নিশ্চিতকরণে কয়েকটি পরিবার  পরিকল্পনা কেন্দ্র সহ একটি স্বাস্থ্যসেবাকেন্দ্র রয়েছে । জরুরী স্বাস্থ্য বাতায়নে যোগাযোগ করতে ক্লিক করুন ।"
        link="tel:16263"
      />
      <Card
       imageUrl={mosque}
        title="ধর্ম"
        description="মুসলমান সংখ্যাগরিষ্ঠ সহ হিন্দু এবং অন্য ধর্মাবলম্বি র‍য়েছেন ।"
      />
      <Card
      imageUrl={bus}
        title="পরিবহন সেবা"
        description="বাঙ্গাবাড়ী হতে রাজশাহীর উদ্দেশ্যে প্রতিদিন সকাল ৬.২০ মিনিটে বিআরটিসি বাস পরিচালনা করা হয়। বাসটি রাজশাহী পৌঁছায় সম্ভাব্য সকাল ১০.০০ মিনিটে এবং প্রতিদিন রাজশাহী হতে বাঙ্গাবাড়ীর উদ্দেশ্যে ছেড়ে আসে দুপুর ৩.০০ মিনিটে এবং বাঙ্গাবাড়ী পৌঁছায় সম্ভাব্য সন্ধ্যা ৭.৩০ মিনিটে । টিকেট বুকিং এর জন্য ক্লিক করুন । "
        link="tel:01719215939"
      />
      <Card
      imageUrl={police}
        title="নিরাপত্তা"
        description="গোমস্তাপুর থানার অধীনে ইউনিয়নে বিট পুলিশিং সহ বর্ডার এলাকার নিরাপত্তার জন্য বর্ডার গার্ড বাংলাদেশ সর্বদা সচেষ্ট রয়েছে । জরুরী দুর্ঘটনা অথবা যেকোনো অভিযোগ জানাতে ক্লিক করুন ।"
        link="tel:01320125628"
      />
      <Card
      imageUrl={tower}
        title="বিদ্যুৎ"
        description="নেসকো লিঃ বিক্রয় ও বিতরণ বিভাগ-গোমস্তাপুর এর অধীনে প্রায় শতভাগ বিদ্যুত সংযোগ রয়েছে । জরুরী দুর্ঘটনা অথবা যেকোনো অভিযোগ জানাতে ক্লিক করুন ।"
        link="tel:01722705033"
      />
      <Card
       imageUrl={internet}
        title="ব্রডব্যান্ড ইন্টারনেট"
        description="উল্লেখযোগ্য বেশ কয়েকটি রিসেলার ব্রডব্যান্ড প্রভাইডর যেমনঃ কার্নিভাল ইন্টারনেট,ইউনিফাইড কোর লিঃ,এসসিসি ওয়াইফাই দ্বারা প্রায় পুরো ইউনিয়নে কাভারেজ এবং পেইড পাব্লিক হটস্পট জোন রয়েছে । ব্রডব্যান্ড ইন্টারনেট সম্পর্কিত যেকোনো অভিযোগ জানাতে ক্লিক করুন । "
        link="tel:100"
      />
      <Card
      imageUrl={sprout}
        title="কৃষি"
        description="উপজেলা কৃষি অধিদপ্তরে কৃষকগণ সহায়তা নিয়ে থাকেন । এছাড়া কৃষিক্ষেত্রে রোগবালাই থেকে ফসল রক্ষাসহ কৃষি অধিদপ্তর এবং বিভিন্ন কীটনাশক পণ্য সরবরাহকারী প্রতিষ্ঠান কর্তৃক সেমিনার আয়োজিত হয়ে থাকে । "
        link="tel:3331"
      />
    </div>
   </>
  );
};

export default Services;
