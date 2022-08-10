import { setColor, setColorOpacity } from '@state/slices/shadowly.slice';
import React from 'react';
import { useDispatch } from 'react-redux';
import ColorParameter from '../color-parameter';
import SliderParameter from '../slider-parameter';

interface IGeneratorColorParametersProps {
  color: string;
  colorOpacity: number;
}

const GeneratorColorParameters: React.FC<IGeneratorColorParametersProps> = (props) => {
  const { color, colorOpacity } = props;
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
        initialValue={colorOpacity}
        label="Color Opacity"
        labelUnit="%"
        min={0}
        max={100}
        onChange={(value) => {
          dispatch(setColorOpacity(value));
        }}
      />
    </div>
  );
};
export default GeneratorColorParameters;
