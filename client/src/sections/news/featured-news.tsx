import React from 'react';
import './featured-news.scss';
import { featuredNewsData } from '../../data/news';

interface FeaturedNewsProps {
  title: string;
  image: string;
  description: string;
  date: string;
}

const FeaturedNews: React.FC<FeaturedNewsProps> = ({
  title,
  image,
  description,
  date,
}) => {
  return (
    <div className="featured-news">
      <div className="featured-news-image" style={{ backgroundImage: `url(${image})` }}>
        <div className="featured-news-date">{date}</div>
      </div>
      <div className="featured-news-content">
        <div className="featured-news-title">{title}</div>
        <div className="featured-news-description">{description}</div>
      </div>
    </div>
  );
};

export default FeaturedNews;
