'use client';
import React, { useEffect, useState } from 'react';

interface TypewriterEffectProps {
  text: string;
  typingSpeed?: number;
}

const TypewriterEffect = (props: TypewriterEffectProps) => {
  const { text, typingSpeed = 100 } = props;
  const [displayText, setDisplayText] = useState<string>('');
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prevText) => prevText + text[index]);
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(intervalId);
      }
    }, typingSpeed);

    return () => clearInterval(intervalId);
  }, [text, typingSpeed, index]);


  return <h1 className='font-black text-5xl'>{displayText}</h1>;
};

export default TypewriterEffect;