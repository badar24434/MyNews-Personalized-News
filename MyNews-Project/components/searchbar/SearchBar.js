'use client';
import { useState } from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar({ onSearch, loading }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form className={styles.searchBar} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for news..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.searchInput}
        disabled={loading}
      />
      <button type="submit" className={styles.searchButton} disabled={loading}>
        {loading ? 'Loading...' : 'Search'}
      </button>
    </form>
  );
}