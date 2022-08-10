import { selectBoxShadow } from '@state/slices/shadowly.slice';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const useShadowGenerator = () => {
  const boxShadow = useSelector(selectBoxShadow);
  const [shadow, setShadow] = useState<string>('');

  const generateShadow = (): string => {
    const { verticalOffset, horizontalOffset, blurRadius, blurSpread, color, colorOpacity } = boxShadow;
    const shadowColor: string = `${color}${colorOpacity}`;
    const shadow = `${verticalOffset}px ${horizontalOffset}px ${blurRadius}px ${blurSpread}px ${shadowColor}`;

    return shadow;
  };

  useEffect(() => {
    setShadow(generateShadow());
  }, [boxShadow]);

  return { shadow };
};

export default useShadowGenerator;
