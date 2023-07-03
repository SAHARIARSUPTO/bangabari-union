import image from "./Questions.svg";

const Accordion = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  mx-auto justify-center items-center sm:ms-40">
      <div className="p-5 mt-10">
        <p className="font-bold text-lg sm:text-xl mb-5">
          এই ওয়েবসাইটটি কিভাবে কাজ করে ?
        </p>
        <p className="text-l sm:text-xl text-slate-500 mb-5">
          এই ওয়েবসাইটটি সম্পূর্ণ ব্যাক্তি-উদ্যোগে তৈরী করা হয়েছে শুধুমাত্র সাধারণ
          মানুষের বিভিন্নরকম সেবা একসাথে একই প্ল্যাটফর্মে হাতের মুঠোয় আনার জন্য
          ।
        </p>
        <p className="font-bold text-lg sm:text-xl mb-5">
          ওয়েবসাইটটিতে উল্লেখিত সোর্সগুলি কি ভরসাযোগ্য?
        </p>
        <p className="text-l sm:text-xl text-slate-500 mb-5">
          ওয়েবসাইটটিতে উল্লেখিত সোর্সগুলির কিছু কিছু কন্টেন্ট ফেসবুক, উইকিপিডিয়া
          থেকে সংগৃহীত । ওয়েবসাইটটির শেষ হালনাগাদ কাল ০৩/০৭/২০২৩ ।
        </p>
        <p className="font-bold text-lg sm:text-xl mb-5">
          এই ওয়েবসাইটটিতে কন্ট্রিবিউট করা যাবে?
        </p>
        <p className="text-l sm:text-xl text-slate-500 mb-5">
          যেহেতু এটি সম্পূর্ণ ব্যাক্তি-উদ্যোগে তৈরী, অতএব কোনো প্রকার ফাণ্ডের প্রয়োজন
          নেই । ওয়েবসাইটটি প্রাথমিক পর্যায়ে ওপেন- সোর্স হিসেবে প্রাকাশিত হবে,
          যেখানে চায়লে কোন ব্যাক্তি কোনো কন্টেন্ট সংযোজন করতে পারেন । তবে বিয়োজন
          করতে হলে অবশ্যই যথার্থ সোর্স নিয়ে যোগাযোগ করতে পারেন ।
        </p>
      </div>

      <div>
        <img src={image} alt="" className="w-1/2 h-2/5 ms-32" />
      </div>
    </div>
  );
};

export default Accordion;
