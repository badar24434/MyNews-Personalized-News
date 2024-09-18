'use client';
import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import SearchBar from '@/components/searchbar/SearchBar';
import NewsGrid from '@/components/grid/newsgrid';
import classes from './page.module.css';

export default function MealsPage() {
    const [searchResults, setSearchResults] = useState(null);
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async (searchTerm) => {
        console.log('Searching for:', searchTerm);
        setLoading(true);
        try {
            const response = await fetch(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=1751182c530a4372b83950c0238ef819`);
            const json = await response.json();
            console.log(json); // Log the JSON data from the API response
            setSearchResults(json.articles); // Update the search results state with the fetched articles
        } catch (error) {
            console.error('Error fetching news:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // Fetch initial news data here and set it to the state
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=1751182c530a4372b83950c0238ef819')
            .then((response) => response.json())
            .then((json) => {
                console.log(json); // Log the JSON data from the API response
                setNews(json.articles); // Update the news state with the fetched articles
            })
            .catch((error) => console.error('Error fetching news:', error));
    }, []);

    return (
        <>
            <header className={classes.header}>
                <h1>
                    Latest News Just For You <span className={classes.highlight}>Exclusively</span>
                </h1>
                <p className={classes.cta}>
                    Pick a topic you're curious about and get the latest news on it.
                    <Link href="/community">Explore Community</Link>
                </p>
                <SearchBar onSearch={handleSearch} loading={loading} />
            </header>
            <main className={classes.main}>
                <Suspense fallback={<p className={classes.loading}>Fetching news...</p>}>
                    {loading ? (
                        <p className={classes.loading}>Fetching news...</p>
                    ) : searchResults ? (
                        <NewsGrid news={searchResults} /> // Use search results if available
                    ) : (
                        <NewsGrid news={news} /> // Use initial news if no search results
                    )}
                </Suspense>
            </main>
        </>
    );
}