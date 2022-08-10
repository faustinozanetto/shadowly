import React, { ChangeEvent, useEffect, useState } from 'react';
import useDebounce from 'src/hooks/use-debounce';
import { MAX_V_OFFSET, MIN_V_OFFSET } from '@lib/constants';
import { setVerticalOffset, setHorizontalOffset } from '@state/slices/shadowly.slice';
import { useDispatch } from 'react-redux';
import { capitalizeString } from '@lib/utils';

interface IOffsetParameterProps {
  // The current vertical offset of the box shadow.
  offset: number;
  // Type of offset.
  type: 'vertical' | 'horizontal';
}

const OffsetParameter: React.FC<IOffsetParameterProps> = (props) => {
  const { offset, type } = props;
  const [value, setValue] = useState(offset);
  const debouncedValue = useDebounce<number>(value, 500);
  const dispatch = useDispatch();

  // Handle the change of the intput slider.
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setValue(Number.parseInt(value, 10));
  };

  useEffect(() => {
    // Update to the state.
    if (type === 'vertical') {
      dispatch(setVerticalOffset(debouncedValue));
    } else {
      dispatch(setHorizontalOffset(debouncedValue));
    }
  }, [debouncedValue]);

  return (
    <div className="flex flex-col">
      {/* Label */}
      <label htmlFor={`${type}-offset`} className="flex mb-1 tex-md font-medium text-gray-900">
        {capitalizeString(type)} Offset
        <span className="ml-auto">{value}px</span>
      </label>
      <input
        id={`${type}-offset`}
        type="range"
        value={value}
        min={MIN_V_OFFSET}
        max={MAX_V_OFFSET}
        onChange={handleChange}
        className="w-full h-2 bg-gray-300 rounded-xl appearance-none cursor-pointer"
      />
    </div>
  );
};
export default OffsetParameter;
