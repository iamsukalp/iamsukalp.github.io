import React, { useEffect, useRef, useState } from 'react';

import '../../src/index.css';
import './card.css';

// Function to format date with ordinal suffix
const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-GB', options);

    // Add ordinal suffix
    const day = date.getDate();
    const suffix = ['th', 'st', 'nd', 'rd'][(day % 10 <= 3 && Math.floor(day % 100 / 10) !== 1) ? day % 10 : 0];
    const dayWithSuffix = day + suffix;

    return `${dayWithSuffix} ${formattedDate.split(' ')[1]} ${formattedDate.split(' ')[2]}`;
};
export function CardDefault({ image, title, description, link, date }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isTruncated, setIsTruncated] = useState(false);
    const contentRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const checkTruncation = () => {
            if (contentRef.current && containerRef.current) {
                setIsTruncated(contentRef.current.scrollHeight > containerRef.current.clientHeight);
            }
        };

        checkTruncation();
        window.addEventListener('resize', checkTruncation);
        return () => window.removeEventListener('resize', checkTruncation);
    }, [description]);

    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    };

    const handleCardClick = () => {
        if (link) {
            window.open(link, '_blank'); // Open the link in a new tab
        }
    };

    return (


        <div className="post" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
            <div className="header_post">
                <img src={image} alt={title} />
            </div>
            <div className="body_post">
                <div className="post_content">
                    <h1>{title}</h1>
                    <div className="container_infos">
                        <div className="postedBy">
                            <span>Published on</span>
                            {formatDate(date)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

