import React from 'react';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

export default function NewsCard({ data }) {
    return (
        <Box>
            <Card>
                <CardActionArea href={data.url} target="_blank">
                    <CardMedia
                        component="img"
                        height="300"
                        image={data.urlToImage}
                        alt={data.title}
                    />
                    <CardContent>
                        <Typography sx={{ fontWeight: "bold" }}>
                            {data.title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    );
}