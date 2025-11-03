import '@testing-library/jest-dom';
import { vi } from 'vitest';
import React from 'react';

// Mock Gatsby's Link component
vi.mock('gatsby', () => ({
  Link: ({ to, children, ...props }: any) => {
    return React.createElement('a', { href: to, ...props }, children);
  },
}));
