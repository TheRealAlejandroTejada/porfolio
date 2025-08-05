# Alejandro Tejada - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern glassmorphism design
- 📱 Fully responsive across all devices
- ⚡ Fast loading with optimized images
- 🔗 Smooth navigation with React Router
- 🌟 Interactive hover animations
- 📊 Project showcases with detailed case studies

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- React Router

## Development

To run the project locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions:

1. **Fork or clone this repository**

2. **Update the homepage URL in package.json:**

   ```json
   "homepage": "https://yourusername.github.io/repository-name"
   ```

3. **Enable GitHub Pages in repository settings:**

   - Go to Settings → Pages
   - Set Source to "GitHub Actions"

4. **Push to main branch:**

   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

5. **Automatic deployment will start:**
   - Check the Actions tab to see deployment progress
   - Your site will be available at the URL specified in package.json

### Manual Deployment (Alternative):

If you prefer to deploy manually:

```bash
# Build and deploy
npm run deploy
```

Note: You'll need to install gh-pages globally first: `npm install -g gh-pages`

## Project Structure

```
├── client/                 # React application source
│   ├── components/        # Reusable components
│   ├── pages/            # Page components
│   └── lib/              # Utility functions
├── public/               # Static assets
│   └── images/          # Project images
├── .github/workflows/   # GitHub Actions
└── dist/               # Built application (generated)
```

## Customization

To customize this portfolio for your own use:

1. **Update personal information** in the page components
2. **Replace project images** in `public/images/`
3. **Modify project data** in `client/pages/Index.tsx` and `client/pages/Showcase.tsx`
4. **Adjust colors and styling** in Tailwind classes

## Performance

- Optimized images with proper sizing
- Code splitting with React Router
- Minimal bundle size with only essential dependencies
- Fast loading times

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own portfolio!
