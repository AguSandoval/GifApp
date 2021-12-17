import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";
import { IGif } from "../types/interfaces";

const GifGrid: React.FC<{ category: string }> = ({ category }) => {
    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>

            {loading && (
                <p className="animate__animated animate__flash">Loading...</p>
            )}

            <div className="card-grid">
                {images.map((img: IGif) => (
                    <GifGridItem key={img.id} {...img} />
                ))}
            </div>
        </>
    );
};
export default GifGrid;
