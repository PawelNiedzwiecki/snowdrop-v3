import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import GalleryItem from './GalleryItem';

describe('GalleryItem', () => {
  const mockProps = {
    title: 'Bridal Elegance',
    category: 'bridal',
    imageUrl: 'https://example.com/image.jpg',
  };

  it('renders the gallery item title', () => {
    render(<GalleryItem {...mockProps} />);
    expect(screen.getByText('Bridal Elegance')).toBeInTheDocument();
  });

  it('renders the category', () => {
    render(<GalleryItem {...mockProps} />);
    expect(screen.getByText('bridal')).toBeInTheDocument();
  });

  it('renders image when imageUrl is provided', () => {
    render(<GalleryItem {...mockProps} />);
    const image = screen.getByAltText('Bridal Elegance');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://example.com/image.jpg');
  });

  it('renders placeholder when imageUrl is not provided', () => {
    const propsWithoutImage = {
      title: 'Test Item',
      category: 'test',
    };
    render(<GalleryItem {...propsWithoutImage} />);
    expect(screen.getByText('📸')).toBeInTheDocument();
  });

  it('has correct CSS class', () => {
    const { container } = render(<GalleryItem {...mockProps} />);
    expect(container.querySelector('.gallery-item')).toBeInTheDocument();
  });
});
