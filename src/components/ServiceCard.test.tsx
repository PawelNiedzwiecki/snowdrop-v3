import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ServiceCard from './ServiceCard';

describe('ServiceCard', () => {
  const mockProps = {
    title: 'Bridal Makeup',
    description: 'Beautiful makeup for your special day',
    price: '$200',
    icon: '👰',
  };

  it('renders the service title', () => {
    render(<ServiceCard {...mockProps} />);
    expect(screen.getByText('Bridal Makeup')).toBeInTheDocument();
  });

  it('renders the service description', () => {
    render(<ServiceCard {...mockProps} />);
    expect(screen.getByText('Beautiful makeup for your special day')).toBeInTheDocument();
  });

  it('renders the service price when provided', () => {
    render(<ServiceCard {...mockProps} />);
    expect(screen.getByText('$200')).toBeInTheDocument();
  });

  it('does not render price when not provided', () => {
    const propsWithoutPrice = {
      title: 'Test Service',
      description: 'Test Description',
    };
    render(<ServiceCard {...propsWithoutPrice} />);
    expect(screen.queryByText('$200')).not.toBeInTheDocument();
  });

  it('renders the icon', () => {
    render(<ServiceCard {...mockProps} />);
    expect(screen.getByText('👰')).toBeInTheDocument();
  });

  it('uses default icon when not provided', () => {
    const propsWithoutIcon = {
      title: 'Test Service',
      description: 'Test Description',
    };
    render(<ServiceCard {...propsWithoutIcon} />);
    expect(screen.getByText('✨')).toBeInTheDocument();
  });
});
