import { selectBoxShadow } from '@state/slices/shadowly.slice';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const useShadowGenerator = () => {
  const boxShadow = useSelector(selectBoxShadow);
  const [shadow, setShadow] = useState<string>('');

  const generateShadow = (): string => {
    const { verticalOffset, horizontalOffset, blurRadius, blurSpread, color } = boxShadow;
    const shadow = `${verticalOffset}px ${horizontalOffset}px ${blurRadius}px ${blurSpread}px ${color}`;

    return shadow;
  };

  useEffect(() => {
    setShadow(generateShadow());
  }, [boxShadow]);

  return { shadow };
};

export default useShadowGenerator;
