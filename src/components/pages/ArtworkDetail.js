import React from 'react';
import { useParams } from 'react-router-dom';

const ArtworkDetail = () => {
  const { id } = useParams();
  
  // Replace this with actual data fetching logic or use static data
  const artwork = {
    id: id,
    title: 'Beautiful Sunset',
    artist: 'John Doe',
    description: 'A stunning painting of a sunset over the mountains.',
    price: '$200',
    imageUrl: 'path/to/artwork-image.jpg',
  };

  return (
    <div className="artwork-detail">
      <div className="artwork-image">
        <img src={artwork.imageUrl} alt={artwork.title} />
      </div>
      <div className="artwork-info">
        <h2>{artwork.title}</h2>
        <p>By {artwork.artist}</p>
        <p>{artwork.description}</p>
        <p>Price: {artwork.price}</p>
      </div>
    </div>
  );
}

export default ArtworkDetail;

