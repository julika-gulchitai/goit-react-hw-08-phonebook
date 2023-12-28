import React from 'react';
import { PacmanLoader } from 'react-spinners';

export const Loader = () => {
  return (
    <div>
      <PacmanLoader color="#d5e3f0" />
      <h2 className="text-white text-2xl ">In progress...</h2>
    </div>
  );
};
