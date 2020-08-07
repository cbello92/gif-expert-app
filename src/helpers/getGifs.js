export const getGifs = async (categorie) => {
    try {
        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(categorie) }&limit=5&api_key=rq3OuHPwaAVzSvyXX2tAhsn2ZH708JAD`;
        const res = await fetch(url);
        const { data } = await res.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url

            }
        })

        return Promise.resolve(gifs);
    } catch (error) {
        return Promise.reject(error);
    }

}