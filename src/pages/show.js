import React,{ useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';

const Show = () => {
    const {id} = useParams();
    const [show, setshow] = useState(null);

    useEffect(() => {
        apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(res => {
            setshow(res);
        })
    }, [id]);

    console.log(show)

    return (
        <div>
            Hey
        </div>
    );
}

export default Show;
