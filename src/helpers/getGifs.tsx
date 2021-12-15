import { IGif } from "../types/interfaces";

export const getGifs = async (category: string) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
        category
    )}&limit=12&api_key=9tZz18zrICejWt6wpb611gvClODDmpZM`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs: IGif[] = data.map((img: IGif) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        };
    });
    return gifs;
};
