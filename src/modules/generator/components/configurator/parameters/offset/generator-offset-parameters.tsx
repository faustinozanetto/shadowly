import React from 'react';
import VerticalOffsetParameter from './vertical-offset-parameter';

interface IGeneratorOffsetParametersProps {
  verticalOffset: number;
  horizontalOffset: number;
}

const GeneratorOffsetParameters: React.FC<IGeneratorOffsetParametersProps> = (props) => {
  const { verticalOffset, horizontalOffset } = props;

  return (
    <div className="flex flex-col space-x-4">
      {/* Vertical Offset */}
      <VerticalOffsetParameter offset={verticalOffset} />

      {/* Horizontal Offset */}
    </div>
  );
};
export default GeneratorOffsetParameters;
