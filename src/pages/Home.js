import React, { useState } from 'react';
import Mainlayout from '../components/MainLayout';
import { apiGet } from '../misc/config';

const Home = () => {
  const [state, setstate] = useState('');
  const [results, setresults] = useState(null);

  const onInputChange = ev => {
    setstate(ev.target.value);
  };

  const OnSearch = () => {
    apiGet(`/search/shows?q=${state}`).then(result => {
      setresults(result);
      console.log(result);
    });
  };

  const enterSearch = ev => {
    if (ev.keyCode === 13) OnSearch();
  };

  const showResults = () => {
    if (results && results.length === 0) return <div>No result</div>;
    if (results && results.length > 0)
      return (
        <div>
          {results.map(item => {
            return <div key={item.show.id}>{item.show.name}</div>;
          })}
        </div>
      );
    return null;
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
      <div>{showResults()}</div>
    </Mainlayout>
  );
};

export default Home;
