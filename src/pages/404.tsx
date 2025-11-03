import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';
import type { HeadFC, PageProps } from 'gatsby';
import './404.css';

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <section className="not-found-section">
        <div className="container">
          <div className="not-found-content">
            <h1 className="not-found-title">404</h1>
            <h2>Page Not Found</h2>
            <p>
              Oops! The page you're looking for doesn't exist.
              It might have been moved or deleted.
            </p>
            <Link to="/" className="btn btn-primary">
              Go Back Home
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>404 - Page Not Found</title>;
