import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';

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
  console.log(show);

  return <div>Hey</div>;
};

export default Show;
