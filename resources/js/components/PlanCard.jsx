import React from 'react';

export default function PlanCard({ title, price, features }) {
  return (
    <div className="bg-white shadow-md p-6 rounded-lg text-center">
      <h4 className="text-2xl font-bold mb-2">{title}</h4>
      <p className="text-xl text-blue-600 mb-4">${price}/mo</p>
      <ul className="mb-4">
        {features.map((f, i) => <li key={i} className="mb-1">{f}</li>)}
      </ul>
      <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Sign Up
      </a>
    </div>
  );
}
