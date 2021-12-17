import React from "react";

const GifGridItem: React.FC<{ title: string; url: string; id: string }> = ({
    title,
    url,
    id,
}) => {
    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    );
};

export default GifGridItem;
