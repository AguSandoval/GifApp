import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import GifGridItem from "./GifGridItem";
// import { IGif } from "../types/interfaces";
// import { getGifs } from "../helpers/getGifs";

const GifGrid: React.FC<{ category: string }> = ({ category }) => {
    const { loading } = useFetchGifs(category);
    // const [images, setImages] = useState<IGif[]>([]);

    // useEffect(() => {
    //     getGifs(category).then(setImages);
    // }, [category]);

    return (
        <>
            <h3>{category}</h3>

            {loading && <p>Loading...</p>}

            {/* <div className="card-grid">
                {images.map((img: IGif) => (
                    <GifGridItem key={img.id} {...img} />
                ))}
            </div> */}
        </>
    );
};
// 9tZz18zrICejWt6wpb611gvClODDmpZM
export default GifGrid;
