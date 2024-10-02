import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import banner from '../../assets/banner.png';
import './Blog.css';

const articles = [
  {
    id: 1,
    title: "Understanding React",
    description: "React is a powerful library for building user interfaces...",
    image: banner,
  },
  {
    id: 2,
    title: "Advanced CSS Tricks",
    description: "Explore advanced techniques to make your web pages stand out...",
    image: banner,
  },
  {
    id: 3,
    title: "JavaScript Tips",
    description: "Improve your JavaScript skills with these essential tips...",
    image: banner,
  },
  {
    id: 4,
    title: "Building Accessible Web Apps",
    description: "Learn how to create web applications that everyone can use...",
    image: banner,
  },
  {
    id: 5,
    title: "Exploring React Hooks",
    description: "A deep dive into React Hooks and how they improve code readability...",
    image: banner,
  },
];

const Blog = () => {
  return (
    <div className='app__blog'>
      <h2>CSI Blogs</h2>
      <Grid container spacing={4} className="app_articles">
        {articles.map((article) => (
          <Grid item xs={12} sm={6} md={4} key={article.id}>
            <Card className="article-card">
              <CardMedia
                component="img"
                height="140"
                image={article.image}
                alt={article.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" color="black" component="div" className="article-title">
                  {article.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {article.description}
                </Typography>
                <Button className="read-more-button" component={Link} to={`/blog/${article.id}`} size="small" color="primary">
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Blog;
