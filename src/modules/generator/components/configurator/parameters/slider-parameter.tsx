import React, { ChangeEvent, useEffect, useState } from 'react';
import useDebounce from 'src/hooks/use-debounce';
import { capitalizeString } from '@lib/utils';

interface ISliderParameterProps {
  // The current vertical offset of the box shadow.
  initialValue: number;
  // Label to display.
  label: string;
  // Minimum value of the slider.
  min: number;
  // Maximum value of the slider.
  max: number;
  // Callback function called when the value of the slider changes.
  onChange: (value: number) => void;
}

const SliderParameter: React.FC<ISliderParameterProps> = (props) => {
  const { initialValue, label, min, max, onChange } = props;
  const [value, setValue] = useState(initialValue);
  const debouncedValue = useDebounce<number>(value, 100);

  // Handle the change of the intput slider.
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setValue(Number.parseInt(value, 10));
  };

  const generateIdentifier = (): string => {
    const words: string[] = label.split(' ');
    return words.join('-').toLowerCase();
  };

  useEffect(() => {
    // Call the onChange callback with the debounced value.
    onChange(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className="flex flex-col">
      {/* Label */}
      <label htmlFor={generateIdentifier()} className="flex mb-1 tex-md font-medium text-gray-900">
        {capitalizeString(label)}
        <span className="ml-auto">{initialValue}px</span>
      </label>
      <input
        id={generateIdentifier()}
        type="range"
        defaultValue={initialValue}
        value={initialValue}
        min={min}
        max={max}
        onChange={handleChange}
        className="w-full h-2 bg-gray-300 rounded-xl appearance-none cursor-pointer"
      />
    </div>
  );
};
export default SliderParameter;
