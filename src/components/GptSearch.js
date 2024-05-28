import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggetion from './GptMovieSuggetion'
import { URL_BACKGROUND } from '../utils/constants';

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img alt="logo" src={URL_BACKGROUND} />
      </div>
      <GptSearchBar />
      <GptMovieSuggetion />
    </div>
  );
}

export default GptSearch