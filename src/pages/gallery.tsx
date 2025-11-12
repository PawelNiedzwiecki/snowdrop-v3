import type { HeadFC, PageProps } from 'gatsby';
import type React from 'react';
import { useState } from 'react';
import GalleryItem from '../components/GalleryItem';
import Layout from '../components/Layout';
import './gallery.css';

const GalleryPage: React.FC<PageProps> = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const galleryItems = [
    { title: 'Bridal Elegance', category: 'bridal', imageUrl: '' },
    { title: 'Natural Glow', category: 'natural', imageUrl: '' },
    { title: 'Evening Glam', category: 'event', imageUrl: '' },
    { title: 'Wedding Day', category: 'bridal', imageUrl: '' },
    { title: 'Fashion Shoot', category: 'editorial', imageUrl: '' },
    { title: 'Party Ready', category: 'event', imageUrl: '' },
    { title: 'Classic Beauty', category: 'bridal', imageUrl: '' },
    { title: 'Dramatic Eyes', category: 'editorial', imageUrl: '' },
    { title: 'Soft Romance', category: 'natural', imageUrl: '' },
    { title: 'Red Carpet', category: 'event', imageUrl: '' },
    { title: 'Vintage Vibes', category: 'editorial', imageUrl: '' },
    { title: 'Fresh Face', category: 'natural', imageUrl: '' },
  ];

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'bridal', label: 'Bridal' },
    { id: 'event', label: 'Events' },
    { id: 'editorial', label: 'Editorial' },
    { id: 'natural', label: 'Natural' },
  ];

  const filteredItems =
    activeFilter === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <Layout>
      <section className="page-header">
        <div className="container">
          <h1>My Work</h1>
          <p>Explore my portfolio of makeup artistry</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="gallery-filters">
            {categories.map((category) => (
              <button
                type="button"
                key={category.id}
                className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filteredItems.map((item) => (
              <GalleryItem
                key={item.title}
                title={item.title}
                category={item.category}
                imageUrl={item.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GalleryPage;

export const Head: HeadFC = () => (
  <>
    <title>Gallery - Makeup Artist Portfolio</title>
    <meta
      name="description"
      content="Browse through our collection of makeup artistry work including bridal, events, and editorial makeup."
    />
  </>
);
