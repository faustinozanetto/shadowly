import React, { ChangeEvent, useEffect, useState } from 'react';
import useDebounce from 'src/hooks/use-debounce';
import { capitalizeString } from '@lib/utils';

interface IColorParameterProps {
  // The current vertical offset of the box shadow.
  initialValue: string;
  // Callback function called when the value of the slider changes.
  onChange: (value: string) => void;
}

const ColorParameter: React.FC<IColorParameterProps> = (props) => {
  const { initialValue, onChange } = props;
  const [value, setValue] = useState(initialValue);
  const debouncedValue = useDebounce<string>(value, 10);

  // Handle the change of the intput slider.
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setValue(value);
  };

  useEffect(() => {
    // Call the onChange callback with the debounced value.
    onChange(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className="flex flex-col">
      {/* Label */}
      <label htmlFor="color-parameter" className="flex mb-1 tex-md font-medium text-gray-900">
        Color
      </label>
      <input
        id="color-parameter"
        type="color"
        defaultValue={initialValue}
        value={initialValue}
        onChange={handleChange}
      />
    </div>
  );
};
export default ColorParameter;
