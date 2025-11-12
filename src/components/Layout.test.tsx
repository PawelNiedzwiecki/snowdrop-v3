import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Layout from './Layout';

describe('Layout', () => {
  it('renders children correctly', () => {
    render(
      <Layout>
        <div>Test Content</div>
      </Layout>
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('renders the logo', () => {
    render(
      <Layout>
        <div>Test</div>
      </Layout>
    );

    const logo = screen.getAllByText('Makeup Artistry')[0];
    expect(logo).toBeInTheDocument();
    expect(logo.closest('.logo')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(
      <Layout>
        <div>Test</div>
      </Layout>
    );

    const navLinks = screen.getByRole('navigation');
    expect(navLinks).toBeInTheDocument();
    expect(navLinks).toHaveTextContent('Home');
    expect(navLinks).toHaveTextContent('Gallery');
    expect(navLinks).toHaveTextContent('Services');
    expect(navLinks).toHaveTextContent('About');
    expect(navLinks).toHaveTextContent('Contact');
  });

  it('renders footer', () => {
    render(
      <Layout>
        <div>Test</div>
      </Layout>
    );

    const currentYear = new Date().getFullYear();
    expect(
      screen.getByText(`© ${currentYear} Makeup Artistry. All rights reserved.`)
    ).toBeInTheDocument();
  });

  it('renders footer sections', () => {
    render(
      <Layout>
        <div>Test</div>
      </Layout>
    );

    expect(screen.getByText('Quick Links')).toBeInTheDocument();
    expect(screen.getByText('Connect')).toBeInTheDocument();
  });
});
