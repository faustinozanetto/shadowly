import React from 'react';
import useShadowGenerator from 'src/hooks/use-shadow-generator';
import GeneratorConfigurator from './configurator/generator-configurator';
import GeneratorResult from './result/generator-result';

interface IShadowlyGeneratorProps {}

const ShadowlyGenerator: React.FC<IShadowlyGeneratorProps> = (props) => {
  const {} = props;
  const { shadow } = useShadowGenerator();

  return (
    <div className="flex flex-col w-full space-y-4 sm:space-y-6">
      {/* Heading */}
      <div className="flex flex-col bg-gradient-to-r from-sky-400 to-cyan-300 z-10 rounded-xl drop-shadow-2xl p-4 sm:p-6">
        <h1 className="font-bold text-white text-3xl sm:text-4xl">Shadowly</h1>
      </div>
      {/* Configuration */}
      <div className="flex flex-col bg-white z-20 rounded-xl mb-4 p-4 sm:p-6">
        <GeneratorConfigurator />
      </div>

      {/* Result */}
      <GeneratorResult shadowResult={shadow} />
    </div>
  );
};

export default ShadowlyGenerator;
