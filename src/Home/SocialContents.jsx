import React from "react";
import { Typewriter } from "react-simple-typewriter";

const SocialContents = () => {
  const videos = [
    {
      link: "https://www.youtube.com/watch?v=BuZvVbaNdYs",
    },
    {
      link: "https://www.youtube.com/watch?v=0IkUzpPLmIk",
    },
    {
      link: "https://www.youtube.com/watch?v=RC2aVHO1N9I",
    },
    {
      link: "https://www.youtube.com/watch?v=hkOCbj5c23Q",
    },
    {
      link: "https://www.youtube.com/watch?v=Rjh5RtQGtw0",
    },
    {
      link: "https://www.youtube.com/watch?v=rGyXSQQyIjc",
    },
    // Add more videos here
  ];

  return (
<>

<>

<p className="mt-10 mb-10 font-bold text-3xl text-center text-[#00AC61]">
        <Typewriter
          words={['বাংগাবাড়ী ভয়েস']}
          loop={3}
          cursor
          cursorStyle='_'
          typeSpeed={200}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </p>


<img className="w-20 h-20 text-center items-center mx-auto" src="https://yt3.ggpht.com/ytc/AGIKgqNXy7yvO81jj5YHgxhZVDBfRIOj0TdvxUWaniOl=s88-c-k-c0x00ffffff-no-rj" alt="" />
<p className="mt-10 mb-10 text-l text-center p-5 sm:text-xl">বাংগাবাড়ীর ইতিহাস,বিভিন্ন খবরাখবর,গুণীজনদের কথা ছাড়াও সামাজিক দৃশ্যপট তুলে ধরা হয় <span className="text-[#fb4a4f] font-bold">বাংগাবাড়ী ভয়েস</span>  -এ ।</p>


</>



<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center justify-center text-center mt-10 mb-10">
      {videos.map((video, index) => (
        <div key={index} className="flex flex-col items-center">
          <a href={video.link} target="_blank" rel="noopener noreferrer">
            <div className="">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={`https://www.youtube.com/embed/${extractYouTubeId(
                    video.link
                  )}`}
                  title={`Video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
{/* show more button */}

   <div className="text-center">
   <a href="https://www.youtube.com/@BangabariVoice" className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-black transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
    <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#00AC61] group-hover:h-full"></span>
    <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
    </span>
    <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
    <svg className="w-5 h-5 #EFF54D" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
    </span>
    <span  className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">আরও দেখুন</span>
    </a>
   </div>

   {/* social buttons */}
   <div className="flex justify-center text-center mx-auto items-center gap-4 mt-10 mb-10">
<div>
<button
  type="button"
  data-te-ripple-init
  data-te-ripple-color="light"
  className="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
  style={{ backgroundColor: '#1877f2' }}
  onClick={() => window.location.href = 'https://www.facebook.com/groups/154947291237661'}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
    />
  </svg>
</button>

</div>
<div>
<button
  type="button"
  data-te-ripple-init
  data-te-ripple-color="light"
  className="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
  style={{ backgroundColor: "#c13584" }}
  onClick={() => window.location.href = 'https://www.instagram.com/bangabarivoice/'}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
    />
  </svg>
</button>
</div>


</div>

   </>
  );
};

// Helper function to extract YouTube video ID
const extractYouTubeId = (url) => {
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|\?v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2] ? match[2] : null;
  
};

export default SocialContents;
