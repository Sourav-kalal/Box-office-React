import React from 'react';
import { Link } from 'react-router-dom';

const Navs = () => {
  const LINKS = [
    { to: '/', text: 'This is home' },
    { to: '/starred', text: 'Starred page' },
  ];

  return (
    <div>
      <ul>
        {LINKS.map(item => {
          return (
            <li key={item.to}>
              <Link to={item.to}>{item.text} </Link>{' '}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navs;
