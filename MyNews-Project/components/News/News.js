'use client';
import { useState, useEffect } from 'react';
import classes from './page.module.css'
import Link from 'next/link';
import { Suspense } from 'react';
import SearchBar from '@/components/searchbar/SearchBar';
import NewsGrid from '@/components/grid/newsgrid'; // Import NewsGrid
import News from '@/components/News/News';

export default function MealsPage() {
    const [searchResults, setSearchResults] = useState(null);
    const [news, setNews] = useState([]);

    const handleSearch = async (searchTerm) => {
        console.log('Searching for:', searchTerm);
        // Implement your search logic here
    };

    useEffect(() => {
        // Fetch news data here and set it to the state
        fetch('https://api.currentsapi.services/v1/latest-news?apiKey=NTY1E88xOcrtDSFh6yNHuHYN9MRiv4_8qX3loPQew77QyAmE&country=us&language=en')
            .then((response) => response.json())
            .then((json) => {
                console.log(json); // Log the JSON data from the API response
                setNews(json.articles); // Update the news state with the fetched articles
            })
            .catch((error) => console.error('Error fetching news:', error));
    }, []);

    return (
        <>
           
            <main className={classes.main}>
                <Suspense fallback={<p className={classes.loading}>Fetching news...</p>}>
                    {searchResults ? (
                        <div></div>
                    ) : (
                        <p></p>
                    )}
                </Suspense>
                <div>
                    <NewsGrid news={news} /> {/* Use NewsGrid component */}
                </div>
            </main>
        </>
    );
}