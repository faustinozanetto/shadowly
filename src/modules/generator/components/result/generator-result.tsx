import React from 'react';

interface IGeneratorResultProps {
  shadowResult: string;
}

const GeneratorResult: React.FC<IGeneratorResultProps> = (props) => {
  const { shadowResult } = props;

  return (
    <div className="flex flex-col p-4 rounded-xl bg-white  sm:p-6" style={{ boxShadow: shadowResult }}>
      {/* Title */}
      <h2 className="font-semibold text-lg mb-1 sm:text-xl md:text-2xl">Result</h2>

      <span>box-shadow: {shadowResult}</span>
    </div>
  );
};

export default GeneratorResult;
