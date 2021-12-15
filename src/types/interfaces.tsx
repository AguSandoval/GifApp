export interface IGif {
    images: {
        downsized_medium: {
            url: string;
        };
    };
    title: string;
    id: string;
    url: string;
}

export interface IState {
    data: IGif[];
    loading: boolean;
}
