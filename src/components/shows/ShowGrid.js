import React from 'react';
import Showcard from './ShowCard';
import IMAGE_NOT_FOUND from '../../Images/not-found.png';

const Showgrid = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.map(item => {
        return (
          <Showcard
            key={item.show.id}
            id={item.show.id}
            name={item.show.name}
            image={item.show.image ? item.show.image.medium : IMAGE_NOT_FOUND}
            summary={item.show.summary}
          />
        );
      })}
    </div>
  );
};

export default Showgrid;
