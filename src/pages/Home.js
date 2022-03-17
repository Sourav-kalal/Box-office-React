import React, { useState } from 'react';
import Mainlayout from '../components/MainLayout';

const Home = () => {
  const [state, setstate] = useState('');

  const onInputChange = ev => {
    setstate(ev.target.value);
  };

  const OnSearch = () => {
    fetch(`https://api.tvmaze.com/search/shows?q=${state}`).then(res => {
      res.json().then(result => {
        console.log(result);
      });
    });
  };

  const enterSearch = ev => {
    if (ev.keyCode === 13) OnSearch();
  };

  return (
    <Mainlayout>
      <input
        onChange={ev => onInputChange(ev)}
        value={state}
        onKeyDown={ev => enterSearch(ev)}
      />
      <button
        type='button'
        onClick={() => {
          OnSearch();
        }}
      >
        Submit
      </button>
    </Mainlayout>
  );
};

export default Home;
