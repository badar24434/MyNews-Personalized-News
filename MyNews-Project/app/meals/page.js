'use client';

import { useState } from 'react';
import classes from './page.module.css';
import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
import { Suspense } from "react";
import SearchBar from '@/components/searchbar/SearchBar';

async function Meals() {
    const meals = await getMeals();
    return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
    const [searchResults, setSearchResults] = useState(null);

    const handleSearch = async (searchTerm) => {
        console.log('Searching for:', searchTerm);
    };

    return (
        <>
            <header className={classes.header}>
                <h1>
                    Latest News Just For You <span className={classes.highlight}>Exclusively</span>
                </h1>
                <p className= {classes.cta}>
                    Pick a topic you're curious about and get the latest news on it.
                    <Link href="/community">Explore Community</Link>
                    </p>
                <SearchBar onSearch={handleSearch} />
            
            </header>
            <main className={classes.main}>
                <Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
                    {searchResults ? (
                        // Display search results here
                        <div>Search results go here</div>
                    ) : (
                        <p>No search results found.</p>
                    )}
                </Suspense>
            </main>
        </>
    );
}