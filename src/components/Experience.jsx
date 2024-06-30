// src/components/Experience.jsx
import React from 'react';

const Experience = () => {
  return (
    <section className="p-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
      <div className="max-w-4xl mx-auto">
        {/* Dummy Experience */}
        <div className="mb-4">
          <h3 className="text-xl font-bold">Company Name</h3>
          <p className="italic">Role</p>
          <p>Description of role and achievements...</p>
        </div>
        {/* Repeat for other experiences */}
      </div>
    </section>
  );
};

export default Experience;
