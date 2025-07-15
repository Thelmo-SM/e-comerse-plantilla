import '@testing-library/jest-dom';
import React from 'react';

jest.mock('next/image', () => {
  return {
    __esModule: true,
    default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
      return React.createElement('img', props);
    },
  };
});


window.scrollTo = jest.fn();