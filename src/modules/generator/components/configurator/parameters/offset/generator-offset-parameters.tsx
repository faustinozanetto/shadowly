import React from 'react';
import OffsetParameter from './offset-parameter';

interface IGeneratorOffsetParametersProps {
  verticalOffset: number;
  horizontalOffset: number;
}

const GeneratorOffsetParameters: React.FC<IGeneratorOffsetParametersProps> = (props) => {
  const { verticalOffset, horizontalOffset } = props;

  return (
    <div className="flex flex-col space-y-2">
      {/* Vertical Offset */}
      <OffsetParameter offset={verticalOffset} type="vertical" />

      {/* Horizontal Offset */}
      <OffsetParameter offset={horizontalOffset} type="horizontal" />
    </div>
  );
};
export default GeneratorOffsetParameters;
