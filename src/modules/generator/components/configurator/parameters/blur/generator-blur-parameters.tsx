import { MAX_BLUR_RADIUS, MAX_BLUR_SPREAD, MIN_BLUR_RADIUS, MIN_BLUR_SPREAD } from '@lib/constants';
import { setBlurRadius, setBlurSpread } from '@state/slices/shadowly.slice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import SliderParameter from '../slider-parameter';

interface IGeneratorBlurParametersProps {
  blurRadius: number;
  blurSpread: number;
}

const GeneratorBlurParameters: React.FC<IGeneratorBlurParametersProps> = (props) => {
  const { blurRadius, blurSpread } = props;
  const [limits, setLimits] = useState<number[]>([MIN_BLUR_RADIUS, MAX_BLUR_RADIUS, MIN_BLUR_SPREAD, MAX_BLUR_SPREAD]);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col space-y-2">
      {/*  Offsets */}
      <SliderParameter
        initialValue={blurRadius}
        label="Blur Radius"
        min={limits[0]}
        max={limits[1]}
        onChange={(value) => {
          dispatch(setBlurRadius(value));
        }}
      />
      <SliderParameter
        initialValue={blurSpread}
        label="Blur Spread"
        min={limits[2]}
        max={limits[3]}
        onChange={(value) => {
          dispatch(setBlurSpread(value));
        }}
      />
    </div>
  );
};
export default GeneratorBlurParameters;
