import React from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export default function GifGrid({ categorie }) {

    const { data, loading } = useFetchGifs(categorie); 

    return (
        <>
            <h3>{categorie}</h3>

            { loading && <p>Loading...</p> }

            <div className="card-grid">
                {
                    data.map(image => (
                        <GifGridItem
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}
