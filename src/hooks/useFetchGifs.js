import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (categorie) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });


    useEffect(() => {
        async function loadGifs() {
            try {
                const gifs = await getGifs(categorie);
                // console.log(gifs)
                setState({
                    data: gifs,
                    loading: false
                });
                
            } catch (error) {
                console.log(error)
            }
        }

        loadGifs();
    }, [categorie]);

    return state;
}