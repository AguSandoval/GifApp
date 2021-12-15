import { useState } from "react";
import { IState } from "../types/interfaces";

export const useFetchGifs = (category: string) => {
    const [state, setState] = useState<IState>({
        data: [],
        loading: true,
    });

    setTimeout(() => {
        setState({
            data: [],
            loading: false,
        });
    }, 3000);

    return state;
};
