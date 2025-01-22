import React from 'react';

const MinimalistCard = ({ image, name, desc, otherClass }) => {

  return (
    <div className={`bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 ${otherClass}`}>
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          src={image || "/api/placeholder/400/320"} 
          alt={name}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          {name}
        </h3>
        
        <p className="text-gray-600 leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default MinimalistCard;