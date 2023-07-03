import React, { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';

const GramPolice = () => {
  const [police, setPolice] = useState([]);

  useEffect(() => {
    fetch('https://bangabari-union-server.vercel.app/police')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Fetched data:', data);
        setPolice(data);
      })
      .catch((error) => console.error('Error fetching members:', error));
  }, []);

  return (
    <>
      <div>
        <p className="overflow-x-auto mt-10 font-bold text-lg text-center text-[#00AC61] sm:text-2xl ps-5 pe-5">
          ২নং বাঙ্গাবাড়ী ইউনিয়ন পরিষদের গ্রাম পুলিশের নাম,পদবী এবং যোগাযোগের তালিকাঃ
        </p>
      </div>

      <div className="overflow-x-auto text-center mx-auto mt-10 mb-10 ps-5 pe-5 text-xs sm:text-xl">
        <table className="w-full rounded-lg border-collapse">
          {/* head */}
          <thead className="bg-[#00AC61] text-white font-bold">
            <tr>
             
              <th className="border-t border-b border-r px-4 py-2 w-2/5">নাম</th>
              <th className="border-t border-b border-r px-4 py-2">পদবী</th>
              <th className="border-t border-b border-r px-4 py-2">গ্রাম</th>
              <th className="border-t border-b border-r px-4 py-2">যোগাযোগ</th>
            </tr>
          </thead>
          <tbody>
            {police.map((member) => (
              <tr key={member._id} className="border-b">
                
                <td className="border-r border-l px-4 py-2">{member.name}</td>
                <td className="border-r px-4 py-2">{member.designation}</td>
                <td className="border-r px-4 py-2">{member.village}</td>
                <td className="border-r px-4 py-2">{member.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default GramPolice;
