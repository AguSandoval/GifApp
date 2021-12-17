import React, { useState } from "react";
import CategoryAdd from "./CategoryAdd";
import GifGrid from "./GifGrid";

const App = () => {
    const [categories, setCategories] = useState([
        "One Punch",
        // "Samurai X",
        // "Dragon Ball",
    ]);

    return (
        <div>
            <h2>Giphynder App</h2>
            <p>
                Simple Gif App developed with React(Typescript) only for
                studying purposes, feel free to use it as you want.
            </p>
            <CategoryAdd setCategories={setCategories} />
            <hr />
            <ol>
                {categories.map((category) => (
                    <GifGrid key={category} category={category} />
                ))}
            </ol>
        </div>
    );
};

export default App;
