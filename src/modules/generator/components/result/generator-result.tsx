import React from 'react';

interface IGeneratorResultProps {
  shadowResult: string;
}

const GeneratorResult: React.FC<IGeneratorResultProps> = (props) => {
  const { shadowResult } = props;

  return (
    <div className="flex flex-col p-2" style={{ boxShadow: shadowResult }}>
      <span>box-shadow: {shadowResult}</span>
    </div>
  );
};

export default GeneratorResult;
