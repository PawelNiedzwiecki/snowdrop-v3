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
- 🚀 Automated CI/CD with GitHub Actions

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

## CI/CD Pipeline

This project uses GitHub Actions for automated testing, building, and deployment.

### Workflows

1. **CI Workflow** - Runs on every push and PR
   - Tests on Node.js 18.x and 20.x
   - Runs all tests
   - Builds production site
   - Uploads build artifacts

2. **Deploy Workflow** - Deploys to GitHub Pages
   - Triggers on push to main/master
   - Can be manually triggered
   - Deploys built site to GitHub Pages

3. **PR Checks** - Validates pull requests
   - Runs tests with coverage
   - Reports build size
   - Comments on PR with status

### Setup GitHub Pages Deployment

1. Go to repository **Settings → Pages**
2. Under "Build and deployment", select **GitHub Actions**
3. Push to main/master branch to trigger deployment
4. Site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO`

For detailed documentation, see [.github/GITHUB_ACTIONS.md](.github/GITHUB_ACTIONS.md)

## License

ISC