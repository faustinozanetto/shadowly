import React from 'react';
import GeneratorConfigurator from './configurator/generator-configurator';
import GeneratorResult from './result/generator-result';

interface IShadowlyGeneratorProps {}

const ShadowlyGenerator: React.FC<IShadowlyGeneratorProps> = (props) => {
  const {} = props;

  return (
    <div className="flex flex-col w-full">
      {/* Heading */}
      <div className="flex flex-col bg-white mb-4 rounded-xl drop-shadow-2xl p-4 sm:p-6">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">Shadowly</h1>
      </div>
      {/* Main Content */}
      <div className="flex flex-col bg-white rounded-xl p-2 sm:p-4">
        {/* Configuration */}
        <GeneratorConfigurator />

        {/* Result */}
        <GeneratorResult />
      </div>
    </div>
  );
};

export default ShadowlyGenerator;
