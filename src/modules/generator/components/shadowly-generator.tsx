import React from 'react';
import GeneratorConfigurator from './generator-configurator';

interface IShadowlyGeneratorProps {}

const ShadowlyGenerator: React.FC<IShadowlyGeneratorProps> = (props) => {
  const {} = props;

  return (
    <div className="flex flex-col w-full">
      {/* Heading */}
      <div className="flex flex-col bg-white p-4 mb-4 rounded-xl">
        <h1 className="font-bold text-2xl sm:text-3xl drop-shadow-2xl">Shadowly</h1>
      </div>
      {/* Main Content */}
      <div className="flex flex-col bg-white rounded-xl p-4 sm:p-6 md:p-8">
        {/* Configuration */}
        <GeneratorConfigurator />

        {/* Result */}
      </div>
    </div>
  );
};

export default ShadowlyGenerator;
