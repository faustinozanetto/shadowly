import { setColor } from '@state/slices/shadowly.slice';
import React from 'react';
import { useDispatch } from 'react-redux';
import ColorParameter from '../color-parameter';

interface IGeneratorColorParametersProps {
  color: string;
}

const GeneratorColorParameters: React.FC<IGeneratorColorParametersProps> = (props) => {
  const { color } = props;
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col space-y-2">
      <ColorParameter
        initialValue={color}
        onChange={(value) => {
          dispatch(setColor(value));
        }}
      />
      {/* Opacity */}
      <SliderParameter
        initialValue={verticalOffset}
        label="Vertical Offset"
        min={limits[0]}
        max={limits[1]}
        onChange={(value) => {
          dispatch(setVerticalOffset(value));
        }}
      />
    </div>
  );
};
export default GeneratorColorParameters;
