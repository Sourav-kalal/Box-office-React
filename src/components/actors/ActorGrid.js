import React from 'react';
import ActorCard from './ActorCard';
import IMAGE_NOT_FOUND from '../../Images/not-found.png';
import { FlexGrid } from '../styled';

const Actorgrid = ({ data }) => {
  return (
    <FlexGrid>
      {data.map(item => {
        return (
          <ActorCard
            key={item.person.id}
            image={
              item.person.image ? item.person.image.medium : IMAGE_NOT_FOUND
            }
            name={item.person.name}
            gender={item.person.gender}
            country={
              item.person.country ? item.person.country.name : 'Not-found'
            }
            birthday={item.person.birthday}
            deathday={item.person.deathday}
          />
        );
      })}
    </FlexGrid>
  );
};

export default Actorgrid;
