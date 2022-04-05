import React,{ useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';

const Show = () => {
    const {id} = useParams();
    const [show, setshow] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {

        let isMounted = true;

        apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(res => {
            if (isMounted) {
                setshow(res);
                setIsLoading(false);
            }
        }).catch(err => {
            if (isMounted) {
                setIsLoading(false);
                setError(err.message)
            }
        })

        return () => {
            isMounted = false;
        }
    }, [id]);

    if (isLoading) {
        return <div>Data is loaded</div>
    }
    if (error) {
        return <div>Ther is an error {error}</div>
    }
    console.log(show)

    return (
        <div>
            Hey
        </div>
    );
}

export default Show;
