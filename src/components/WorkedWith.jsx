// src/components/WorkedWith.jsx
import React from 'react';
import BKT from '../assets/BKT.png';
import Enea from '../assets/Enea.png';
import KinderKraft from '../assets/Kinderkraft.png';
import ODM from '../assets/ODM.png';
import sisem from '../assets/sisem.png';
import SkinsMonkey from '../assets/SkinsMonkey.png';
import PKP from '../assets/PKP.png';
// Add more imports as necessary

const WorkedWith = () => {
  return (
    <section className="px-10 gap-10 text-white flex flex-row items-center justify-center">
      <h2 className=" text-xl font-bold mb-6">Worked <span className='text-[#646B72]'>with :</span></h2>
      <div className="flex flex-wrap justify-center items-center gap-14">
        <img src={BKT} alt="bkt" className="h-12" />
        <img src={Enea} alt="Logo 2" className="h-12" />
        <img src={ODM} alt="Logo 3" className="h-12" />
        <img src={KinderKraft} alt="Logo 4" className="h-12" />
        <img src={sisem} alt="Logo 5" className="h-12" />
        <img src={SkinsMonkey} alt="Logo 6" className="h-12" />
        <img src={PKP} alt="Logo 7" className="h-12" />

        {/* Add more logos as necessary */}
      </div>
    </section>
  );
};

export default WorkedWith;
