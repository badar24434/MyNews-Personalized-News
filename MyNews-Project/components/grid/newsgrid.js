import React from 'react';
import { Grid } from '@mui/material';
import NewsCard from '@/components/News/NewsCard';
import classes from './newsgrid.module.css';

export default function NewsGrid({ news }) {
    return (
        <div className={classes.newsGrid}>
            <Grid container spacing={4} justifyContent="center" alignItems="stretch">
                {news.map((data, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <NewsCard data={data} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}
