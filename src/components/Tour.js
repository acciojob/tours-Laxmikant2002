import React, { useState } from "react";
import "../styles/Tour.css";

const Tour = ({ id, image, name, price, info, removeTour }) => {
    const [showMore, setShowMore] = useState(false);

    return (
        <article className="single-tour">
            <img src={image} alt={name} />
            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className="tour-price">${price}</h4>
                </div>
                <p>
                    {showMore ? info : `${info.substring(0, 200)}${info.length > 200 ? '...' : ''}`}
                    {info.length > 200 && (
                        <button
                            className="show-more-btn"
                            aria-label={showMore ? "Collapse tour description" : "Expand tour description"}
                            onClick={() => setShowMore(!showMore)}
                        >
                            {showMore ? "See Less" : "Show More"}
                        </button>
                    )}
                </p>
                <button
                    className="delete-btn"
                    aria-label={`Remove ${name} tour`}
                    onClick={() => removeTour(id)}
                >
                    Remove
                </button>
            </footer>
        </article>
    );
};

export default Tour;