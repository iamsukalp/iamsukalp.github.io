import {
    Card,
    CardBody,
    CardHeader,
    Typography
} from "@material-tailwind/react";
import React, { useEffect, useRef, useState } from 'react';

import '../../src/index.css';

// Function to format date with ordinal suffix
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-GB', options);

  // Add ordinal suffix
  const day = date.getDate();
  const suffix = ['th', 'st', 'nd', 'rd'][(day % 10 <= 3 && Math.floor(day % 100 / 10) !== 1) ? day % 10 : 0];
  const dayWithSuffix = day + suffix;

  return `Published on ${dayWithSuffix} ${formattedDate.split(' ')[1]} ${formattedDate.split(' ')[2]}`;
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
  
    return (
        <Card className="mt-6 w-80 overflow-hidden flex flex-col h-[400px]">
            <CardHeader shadow={false} floated={false} className="h-56">
                <img src={image} alt={title} className="w-full h-full object-cover" />
            </CardHeader>
            <CardBody className="p-4 flex flex-col flex-grow">
                <div className="flex-grow flex flex-col">
                    <Typography variant="small" color="gray" className="mb-2">
                        {formatDate(date)}
                    </Typography>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        {title}
                    </Typography>
                    <div 
                        ref={containerRef} 
                        className={`flex-grow overflow-hidden ${isExpanded ? 'max-h-full' : 'max-h-24'}`}
                    >
                        <Typography color="gray" ref={contentRef}>
                            {description}
                        </Typography>
                    </div>
                </div>
                {(isTruncated || isExpanded) && (
                    <button 
                        onClick={toggleDescription} 
                        className="mt-2 text-blue-500 hover:text-blue-700 transition-colors self-start"
                    >
                        {isExpanded ? 'Show less' : 'Read more'}
                    </button>
                )}
            </CardBody>
        </Card>
    );
}
/// this is my card component consider this, just acknowledge .. i will ask the question in next message
