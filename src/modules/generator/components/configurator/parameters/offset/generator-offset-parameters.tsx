import { MAX_H_OFFSET, MAX_V_OFFSET, MIN_H_OFFSET, MIN_V_OFFSET } from '@lib/constants';
import { setVerticalOffset, setHorizontalOffset } from '@state/slices/shadowly.slice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import SliderParameter from '../slider-parameter';

interface IGeneratorOffsetParametersProps {
  verticalOffset: number;
  horizontalOffset: number;
}

const GeneratorOffsetParameters: React.FC<IGeneratorOffsetParametersProps> = (props) => {
  const { verticalOffset, horizontalOffset } = props;
  const [limits, setLimits] = useState<number[]>([MIN_V_OFFSET, MAX_V_OFFSET, MIN_H_OFFSET, MAX_H_OFFSET]);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col space-y-2">
      {/*  Offsets */}
      <SliderParameter
        initialValue={verticalOffset}
        label="Vertical Offset"
        min={limits[0]}
        max={limits[1]}
        onChange={(value) => {
          dispatch(setVerticalOffset(value));
        }}
      />
      <SliderParameter
        initialValue={horizontalOffset}
        label="Horizontal Offset"
        min={limits[2]}
        max={limits[3]}
        onChange={(value) => {
          dispatch(setHorizontalOffset(value));
        }}
      />
    </div>
  );
};
export default GeneratorOffsetParameters;
