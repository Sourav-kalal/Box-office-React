import React from 'react';
import Showcard from './ShowCard';
import IMAGE_NOT_FOUND from '../../Images/not-found.png';
import { FlexGrid } from '../styled';

const Showgrid = ({ data }) => {
  return (
    <FlexGrid>
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
    </FlexGrid>
  );
};

export default Showgrid;
