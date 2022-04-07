/* eslint-disable no-underscore-dangle */
import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import Cast from '../components/shows/Cast';
import Details from '../components/shows/Details';
import Seasons from '../components/shows/Seasons';
import Showmaindata from '../components/shows/showMainData';
import { apiGet } from '../misc/config';
import { ShowPageWrapper ,InfoBlock} from '../components/shows/Show.styled'

const Show = () => {
  const { id } = useParams();

  // const [show, setshow] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

  const reduce = (prevState, action) => {
    switch (action.type) {
      case 'FETCH_SUCCESS': {
        return {
          show: action.show,
          isLoading: false,
          error: null,
        };
      }

      case 'FETCH_FAILED':
        return {
          ...prevState,
          isLoading: false,
          error: action.err,
        };
      default:
        return prevState;
    }
  };

  const initialize = {
    show: null,
    isLoading: true,
    error: null,
  };

  const [{ isLoading, show, error }, dispatch] = useReducer(reduce, initialize);

  useEffect(() => {
    let isMounted = true;

    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then(res => {
        if (isMounted) {
          dispatch({ type: 'FETCH_SUCCESS', show: res });
        }
      })
      .catch(err => {
        if (isMounted) {
          dispatch({ type: 'FETCH_FAILED', err: err.message });
        }
      });

    return () => {
      isMounted = false;
    };
  }, [dispatch, id]);

  if (isLoading) {
    return <div>Data is loaded</div>;
  }
  if (error) {
    return <div>Ther is an error {error}</div>;
    }
    
    console.log(show)

    return <ShowPageWrapper>
        <Showmaindata 
            image={show.image} name={show.name} rating={show.rating} summary={show.summary} tags={show.genres}
        />
        <InfoBlock>
            <h2>Details</h2>
            <Details status={show.status } network={show.network } premiered={show.premiered }/>
        </InfoBlock>

        <InfoBlock>
            <h2>Seasons</h2>
            <Seasons seasons={ show._embedded.seasons}/>
        </InfoBlock>

        <InfoBlock>
            <h2>Cast</h2>
            <Cast cast={ show._embedded.cast}/>
        </InfoBlock>

  </ShowPageWrapper>
};

export default Show;
