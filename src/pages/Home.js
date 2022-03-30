import React, { useState } from 'react';
import Actorgrid from '../components/actors/ActorGrid';
import Mainlayout from '../components/MainLayout';
import Showgrid from '../components/shows/ShowGrid';
import { apiGet } from '../misc/config';

const Home = () => {
  const [state, setstate] = useState('');
  const [results, setresults] = useState(null);
  const [searchOption, setsearchOption] = useState('shows');

  const isShow = searchOption === 'shows';
  const onInputChange = ev => {
    setstate(ev.target.value);
  };

  const OnSearch = radio => {
    apiGet(`/search/${radio}?q=${state}`).then(result => {
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
      return results[0].show ? (
        <div>
          {
            <Showgrid data={results} />
            /* {results.map(item => {
            return <div key={item.show.id}>{item.show.name}</div>;
          })} */
          }
        </div>
      ) : (
        <div>
          {
            <Actorgrid data={results} />
            /* {results.map(item => {
            return <div key={item.person.id}>{item.person.name}</div>;
          })} */
          }
        </div>
      );
    return null;
  };

  const onRadiochange = ev => {
    setsearchOption(ev.target.value);
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
          OnSearch(searchOption);
        }}
      >
        Submit
      </button>
      <div>
        <label htmlFor='show-button'>
          Shows
          <input
            type='radio'
            id='show-button'
            checked={isShow}
            value='shows'
            onChange={ev => {
              onRadiochange(ev);
            }}
          />
        </label>
        <label htmlFor='actor-button'>
          Actor
          <input
            type='radio'
            id='actor-button'
            value='people'
            checked={!isShow}
            onChange={ev => {
              onRadiochange(ev);
            }}
          />
        </label>
      </div>

      <div>{showResults()}</div>
    </Mainlayout>
  );
};

export default Home;
