// src/components/Insights.jsx
import React from 'react';

const Insights = () => {
  return (
    <section id="insights" className="p-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Latest Insights</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Dummy Insights */}
        <div className=" p-4 shadow-lg">
          <img src="/src/assets/dummy-image.jpg" alt="Insight" className="w-full mb-4"/>
          <h3 className="text-xl font-bold">Insight Title</h3>
          <p>Insight description goes here...</p>
        </div>
        {/* Repeat for other insights */}
      </div>
    </section>
  );
};

export default Insights;
