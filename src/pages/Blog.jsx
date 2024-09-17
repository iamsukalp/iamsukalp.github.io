import React, { useEffect, useState } from "react";
import { CardDefault } from "../components/Card"; // Adjust the path as necessary

// Placeholder image for missing or broken thumbnails
const placeholderImage = "https://via.placeholder.com/300x200?text=No+Image";

// Function to strip HTML tags from a string
const stripHtmlTags = (html) => {
  // Create a temporary DOM element
  const tempDiv = document.createElement('div');
  // Set the inner HTML of the temporary div
  tempDiv.innerHTML = html;
  // Get the text content from the div, effectively stripping out HTML tags
  return tempDiv.textContent || tempDiv.innerText || '';
};

const Blog = () => {
  const [articles, setArticles] = useState([]);

  // Function to fetch Medium RSS feed
  const fetchMediumRSS = async (username) => {
    const rssUrl = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`;

    try {
      const response = await fetch(rssUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data)
      if (data.items) {
       
        setArticles(data.items); // Assuming the articles are in `items`
      }
    } catch (error) {
      console.error("Failed to fetch RSS feed:", error);
    }
  };

  // Extract thumbnail URL from description using regex
  const extractThumbnailFromDescription = (description) => {
    const imgTagMatch = description.match(/<img[^>]+src="([^">]+)"/);
    return imgTagMatch ? imgTagMatch[1] : placeholderImage;
  };

  // Extract content from the first <p> tag in the description and strip HTML tags
  const extractDescriptionFromDescription = (description) => {
    const pTagMatch = description.match(/<p>(.*?)<\/p>/);
    const textContent = pTagMatch ? pTagMatch[1] : "No description available";
    return stripHtmlTags(textContent);
  };

  // Load the RSS feed on component mount
  useEffect(() => {
    fetchMediumRSS("sukalp"); // Replace with your Medium username
  }, []);

  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Blog Posts from{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          Medium
        </span>
      </h1>

      <div className=' flex flex-col'>
        <div className='flex flex-col gap-3 text-slate-500'>
          <p>
            Check out my latest Medium articles where I discuss generative AI, innovation, data analytics, and more!
          </p>
        </div>

        {/* <div className='mt-4 grid grid-cols-1 md:grid-cols-3 gap-40'> */}
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-2 mt-10 justify-items-center">
          {/* Loop through the articles array */}
          {articles.length > 0 ? (
            articles.map((article) => (
              <CardDefault
                key={article.guid}
                image={extractThumbnailFromDescription(article.description)}
                title={article.title}
                description={extractDescriptionFromDescription(article.description)}
                link={article.link}
                date={article.pubDate}
              />
            ))
          ) : (
            <p>No articles available</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;
