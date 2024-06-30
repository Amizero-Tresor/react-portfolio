// src/components/AboutMe.jsx
import React from 'react';
import Button from'./Button';

const AboutMe = () => {
  return (
    <section id="about" className="p-10">
      <Button/>
      <p className=" mt-10 text-3xl mx-auto font-mochiy">
        Hi, there! My name is <span  className='text-[#646B72]'>Amizero Tresor</span>. I am a <span className='text-[#646B72]' >frontend developer</span> & <span className='text-[#646B72]'>UI/UX designer</span> & <span className='text-[#646B72]' >motion graphic designer</span> from Rwanda with a passionate courage to help realise what I think with what people can see!
      </p>
    </section>
  );
};

export default AboutMe;
