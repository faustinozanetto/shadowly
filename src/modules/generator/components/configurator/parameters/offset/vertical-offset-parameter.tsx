import React from 'react';

interface IVerticalOffsetParameterProps {
  offset: number;
}

const VerticalOffsetParameter: React.FC<IVerticalOffsetParameterProps> = (props) => {
  const { offset } = props;

  return (
    <div className="flex flex-col">
      {/* Label */}
      <label htmlFor="vertical-offset" className="block mb-1 tex-md font-medium text-gray-900">
        Vertical Offset
      </label>
      <input
        id="vertical-offset"
        type="range"
        className="w-full h-2 bg-gray-300 rounded-xl appearance-none cursor-pointer"
      />
    </div>
  );
};
export default VerticalOffsetParameter;
