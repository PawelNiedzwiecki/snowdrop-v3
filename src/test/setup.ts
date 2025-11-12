import '@testing-library/jest-dom';
import React from 'react';
import { vi } from 'vitest';

// Mock Gatsby's Link component
vi.mock('gatsby', () => ({
  Link: ({
    to,
    children,
    ...props
  }: {
    to: string;
    children: React.ReactNode;
    [key: string]: unknown;
  }) => {
    return React.createElement('a', { href: to, ...props }, children);
  },
}));
