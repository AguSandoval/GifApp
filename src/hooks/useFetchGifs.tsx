import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { IState } from "../types/interfaces";

export const useFetchGifs = (category: string) => {
    const [state, setState] = useState<IState>({
        data: [],
        loading: true,
    });

    useEffect(() => {
        getGifs(category).then((img) =>
            setState({
                data: img,
                loading: false,
            })
        );
    }, [category]);

    return state;
};
