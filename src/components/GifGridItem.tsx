import React from "react";

const GifGridItem: React.FC<{ title: string; url: string; id: string }> = ({
    title,
    url,
    id,
}) => {
    return (
        <div className="card">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    );
};

export default GifGridItem;
