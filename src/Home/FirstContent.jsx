import { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';

const FirstContent = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  
  const contentStyle = {
    opacity: animate ? 1 : 0,
    transform: `translateY(${animate ? '0' : '-50%'})`,
    transition: 'opacity 0.5s ease-out, transform 0.8s ease-out',
  };

  return (
    <div style={contentStyle}>
      <p className="mt-10 font-bold text-3xl text-center text-[#00AC61]">
        <Typewriter
          words={['স্বাগতম!']}
          loop={3}
          cursor
          cursorStyle='_'
          typeSpeed={200}
          deleteSpeed={50}
          delaySpeed={1000}
         
        />
      </p>
      <p className="text-sm text-center p-5 sm:text-xl">
        চাঁপাইনবাবগঞ্জ জেলাধীন গোমস্তাপুর থানার অন্তর্গত ২নং বাঙ্গাবাড়ী ইউনিয়ন-এ আপনাকে স্বাগতম । এটি মোট ১৯ টি গ্রাম এবং ৫ টি মৌজার সমন্বয়ে গঠিত।
        বাঙ্গাবাড়ী ইউনিয়ন এর দক্ষিণে মহানন্দা নদী এবং পশ্চিম ও উত্তর পশ্চিমে ভারতের মালদহ জেলা অবস্থিত। বাঙ্গাবাড়ী ইউনিয়ন এর পূর্ব দিকে আলীনগর ইউনিয়ন অবস্থিত। এছাড়াও উত্তর পূর্ব দিক দিয়ে পূণর্ভবা নদী ভারত থেকে বাংলাদেশে প্রবেশ করেছে এর আয়তন – ১৪.৭০ (বর্গ কিঃ মিঃ)।
      </p>
    </div>
  );
};

export default FirstContent;
