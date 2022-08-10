import React from 'react';
import GeneratorOffsetParameters from './parameters/offset/generator-offset-parameters';
import { selectBoxShadow } from '@state/slices/shadowly.slice';
import { useSelector } from 'react-redux';
import GeneratorBlurParameters from './parameters/blur/generator-blur-parameters';
import GeneratorColorParameters from './parameters/color/generator-color-parameters';

interface IGeneratorConfiguratorProps {}

const GeneratorConfigurator: React.FC<IGeneratorConfiguratorProps> = (props) => {
  const {} = props;
  const boxShadow = useSelector(selectBoxShadow);

  return (
    <div className="flex flex-col space-y-2">
      {/* Title */}
      <h2 className="font-semibold text-lg mb-1 sm:text-xl md:text-2xl">Configure your Shadow</h2>
      {/* Offset Parameters */}
      <GeneratorOffsetParameters
        verticalOffset={boxShadow.verticalOffset}
        horizontalOffset={boxShadow.horizontalOffset}
      />
      {/* Blur Parameters */}
      <GeneratorBlurParameters blurRadius={boxShadow.blurRadius} blurSpread={boxShadow.blurSpread} />
      {/* Color Parameters */}
      <GeneratorColorParameters color={boxShadow.color} />
    </div>
  );
};

export default GeneratorConfigurator;
