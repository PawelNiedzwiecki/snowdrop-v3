import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from './Hero';

describe('Hero', () => {
  it('renders the hero title', () => {
    render(<Hero />);
    expect(screen.getByText('Transforming Beauty Through Artistry')).toBeInTheDocument();
  });

  it('renders the hero subtitle', () => {
    render(<Hero />);
    expect(screen.getByText(/Professional makeup artistry for every occasion/i)).toBeInTheDocument();
  });

  it('renders call-to-action buttons', () => {
    render(<Hero />);
    expect(screen.getByText('View Gallery')).toBeInTheDocument();
    expect(screen.getByText('Book Consultation')).toBeInTheDocument();
  });

  it('has correct link for gallery button', () => {
    render(<Hero />);
    const galleryLink = screen.getByText('View Gallery').closest('a');
    expect(galleryLink).toHaveAttribute('href', '/gallery');
  });

  it('has correct link for contact button', () => {
    render(<Hero />);
    const contactLink = screen.getByText('Book Consultation').closest('a');
    expect(contactLink).toHaveAttribute('href', '/contact');
  });
});
