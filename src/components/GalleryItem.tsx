import React from 'react';
import './GalleryItem.css';

interface GalleryItemProps {
  title: string;
  category: string;
  imageUrl?: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ title, category, imageUrl }) => {
  return (
    <div className="gallery-item">
      <div className="gallery-image-wrapper">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="gallery-image" />
        ) : (
          <div className="gallery-placeholder">
            <span>📸</span>
          </div>
        )}
        <div className="gallery-overlay">
          <div className="gallery-info">
            <h3 className="gallery-title">{title}</h3>
            <p className="gallery-category">{category}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
