# Makeup Artist Portfolio

A professional, responsive portfolio website for makeup artists built with React, TypeScript, Gatsby, and Vitest.

## Features

- 🎨 Modern, responsive design optimized for all devices
- 💄 Portfolio gallery with category filtering
- 📱 Mobile-friendly navigation
- ⚡ Fast performance with Gatsby
- 🧪 Comprehensive test coverage with Vitest
- 📦 TypeScript for type safety
- 🎯 SEO-friendly structure

## Pages

- **Home**: Hero section, services preview, and call-to-action
- **Gallery**: Filterable portfolio showcasing makeup work
- **Services**: Detailed service offerings and pricing
- **About**: Artist bio and expertise
- **Contact**: Contact form and information

## Tech Stack

- **Framework**: Gatsby (React-based)
- **Language**: TypeScript
- **Testing**: Vitest + Testing Library
- **Styling**: CSS (with responsive design)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run develop

# Build for production
npm run build

# Serve production build
npm run serve

# Run tests
npm test

# Clean cache
npm run clean
```

## Available Scripts

- `npm run develop` - Start development server at `http://localhost:8000`
- `npm run build` - Build for production
- `npm run serve` - Serve production build
- `npm test` - Run tests with Vitest
- `npm run test:ui` - Run tests with UI
- `npm run test:coverage` - Generate test coverage report
- `npm run clean` - Clean Gatsby cache
- `npm run lint` - Check code for linting issues with Biome
- `npm run lint:fix` - Fix linting issues with Biome
- `npm run format` - Format code with Biome
- `npm run check` - Format and lint code with Biome (with fixes)
- `npm run ci` - CI mode - check formatting and linting without fixes

## Code Quality

This project uses [Biome](https://biomejs.dev/) for linting and formatting:

- **Formatting**: 2-space indentation, single quotes, semicolons, 100 character line width
- **Linting**: Comprehensive rules for TypeScript, React, and accessibility
- **Import Organization**: Automatically sorts and organizes imports

Run `npm run check` before committing to ensure code quality.

## Project Structure

```
src/
├── components/       # Reusable React components
│   ├── Layout.tsx
│   ├── Hero.tsx
│   ├── ServiceCard.tsx
│   └── GalleryItem.tsx
├── pages/           # Page components
│   ├── index.tsx    # Home page
│   ├── gallery.tsx  # Gallery page
│   ├── services.tsx # Services page
│   ├── about.tsx    # About page
│   ├── contact.tsx  # Contact page
│   └── 404.tsx      # 404 page
├── styles/          # Global styles
│   └── global.css
├── images/          # Image assets
└── test/            # Test setup
    └── setup.ts
```

## Customization

To customize this portfolio for your needs:

1. Update site metadata in `gatsby-config.ts`
2. Replace placeholder content in page components
3. Add your own images to the gallery
4. Update contact information in the contact page
5. Customize colors in `src/styles/global.css` (CSS variables)

## Testing

The project includes comprehensive tests for all components:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Generate coverage report
npm run test:coverage
```

## License

ISC