import React from 'react';
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
  
    return `Published on ${dayWithSuffix} ${formattedDate.split(' ')[1]} ${formattedDate.split(' ')[2]}`;
  };

  export function CardDefault({ image, title, description, link, date }) {


    return (
        <div className="post b-1" >
          <div className="header_post">
            <img src = {image} alt="Post header" />
          </div>
          <div className="body_post">
            <div className="post_content">
              <h1>{title}</h1>
              <p>{description}</p>
              {/* <div className="container_infos">
                <div className="postedBy">
                  <span>author</span>
                  {author}
                </div>
                <div className="container_tags">
                  <span>tags</span>
                  <div className="tags">
                    <ul>
                      {tags.map((tag, index) => (
                        <li key={index}>{tag}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      );

  }
