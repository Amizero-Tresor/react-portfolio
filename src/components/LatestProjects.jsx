// src/components/LatestProjects.jsx
import React from 'react';

const LatestProjects = () => {
  return (
    <section id="work" className="p-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Latest Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Dummy Projects */}
        <div className=" p-4 shadow-lg">
          <img src="/src/assets/dummy-image.jpg" alt="Project" className="w-full mb-4"/>
          <h3 className="text-xl font-bold">Project Title</h3>
          <p>Project description goes here...</p>
        </div>
        {/* Repeat for other projects */}
      </div>
    </section>
  );
};

export default LatestProjects;
