import React from 'react';
import useShadowGenerator from 'src/hooks/use-shadow-generator';
import GeneratorConfigurator from './configurator/generator-configurator';
import GeneratorResult from './result/generator-result';

interface IShadowlyGeneratorProps {}

const ShadowlyGenerator: React.FC<IShadowlyGeneratorProps> = (props) => {
  const {} = props;
  const { shadow } = useShadowGenerator();

  return (
    <div className="flex flex-col w-full">
      {/* Heading */}
      <div className="flex flex-col bg-white mb-4 rounded-xl drop-shadow-2xl p-4 sm:p-6">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">Shadowly</h1>
      </div>
      {/* Configuration */}
      <div className="flex flex-col bg-white rounded-xl mb-4 p-4 sm:p-6">
        <GeneratorConfigurator />
      </div>

      <div className="flex flex-col p-2 sm:p-4">
        {/* Result */}
        <GeneratorResult shadowResult={shadow} />
      </div>
    </div>
  );
};

export default ShadowlyGenerator;
