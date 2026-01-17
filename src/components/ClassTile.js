import React from 'react';

const ClassTile = ({ className, status, animationDelay = 0 }) => {
  const getStatusColor = (status) => {
    switch(status) {
      case 'completed':
        return 'bg-pastel-green';
      case 'in-progress':
        return 'bg-pastel-yellow';
      case 'incomplete':
        return 'bg-pastel-red';
      default:
        return 'bg-gray-300';
    }
  };

  // Parse class name to separate number and name
  // Examples: "Algorithms 311" -> name: "Algorithms", number: "311"
  //           "189H" -> name: "", number: "189H"
  const parseClassName = (name) => {
    // Check if it's just a number/code (like "189H")
    const numberOnlyMatch = name.match(/^(\d+[A-Za-z]*)$/);
    if (numberOnlyMatch) {
      return { name: '', number: numberOnlyMatch[1] };
    }
    
    // Try to find a number at the end
    const match = name.match(/^(.+?)\s+(\d+[A-Za-z]*)$/);
    if (match) {
      return { name: match[1].trim(), number: match[2] };
    }
    
    // If no number found, return entire string as name
    return { name: name, number: '' };
  };

  const { name: classNameName, number: classNumber } = parseClassName(className);

  return (
    <div 
      className="flex flex-col items-center w-[70px] opacity-0"
      style={{
        animation: `slide-in-left 0.7s ease-out ${animationDelay}s forwards`
      }}
    >
      <div className={`w-14 h-14 rounded border border-solid border-primary-black flex flex-col items-center justify-center ${getStatusColor(status)} shrink-0 p-1`}>
        {classNumber && (
          <span className="text-[9px] text-zinc-500 leading-tight">
            {classNumber}
          </span>
        )}
        {classNameName && (
          <span className="text-[8px] text-primary-black leading-tight text-center">
            {classNameName}
          </span>
        )}
      </div>
    </div>
  );
};

export default ClassTile;

