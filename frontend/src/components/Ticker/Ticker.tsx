import React, { useEffect, useRef, useState } from 'react';

type TickerProps = {
  imageSrc: string;
  word: string;
};

export const Ticker: React.FC<TickerProps> = ({ imageSrc, word }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [instances, setInstances] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const textElement = containerRef.current.querySelector('.running-text__container__text') as HTMLElement;
        const textWidth = textElement?.offsetWidth || 0;
        const availableWidth = containerWidth - textWidth;
        const newInstances = Math.floor(availableWidth / textWidth);
        setInstances(newInstances);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="running-text" ref={containerRef}>
      <div className="running-text__container">
        {Array.from({ length: instances + 1 }).map((_, index) => (
          <div key={index}>
            <img src={imageSrc} alt="Ticker Image" className="running-text__container__image" />
            <h1 className="running-text__container__text">{word}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};