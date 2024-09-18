'use client';
import React, { useEffect } from 'react';

export default function Home() {
  const getNews = () => {
    fetch('https://gnews.io/api/v4/search?q=Apple&token=764027515b392bc6ee8e68723adfeae0&lang=en&sortby=relevance')
      .then((response) => response.json())
      .then((json) => {
        console.log(json); // Log the JSON data from the API response
      })
      .catch((error) => console.error('Error fetching news:', error));
  };

  useEffect(() => {
    getNews(); // Call getNews on component mount
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <div>
    </div>
  );
}
