# Real Estate Website Setup Guide

This is a modern, warm minimalist real estate website built with Next.js and Sanity CMS.

## Getting Started

### 1. Set Up Sanity CMS

First, you need to create a Sanity project:

1. Go to [sanity.io](https://www.sanity.io/) and sign up/login
2. Create a new project
3. Choose a project name and dataset name (usually "production")
4. Copy your Project ID

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your Sanity credentials:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-12-14
```

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the main website.

### 4. Access the Admin Portal

Go to [http://localhost:3000/studio](http://localhost:3000/studio) to access the Sanity Studio where you can manage properties.

## For Gaby - Using the Admin Portal

1. Navigate to `/studio` (e.g., `http://yourwebsite.com/studio`)
2. Click "Property" to add a new listing
3. Fill in the details:
   - **Property Title**: e.g., "Beautiful Colonial Home"
   - **Images**: Upload photos (drag and drop)
   - **Address**: Full street address
   - **Neighborhood**: Area or district
   - **Price, Beds, Baths, Square Feet**: Property details
   - **Description**: General description of the home
   - **Agent's Personal Note**: ✨ This is where Gaby adds her personal touch! What does she love about this home?
   - **Status**: For Sale, Under Contract, or Sold
   - **Display on Homepage**: Toggle to show/hide the property
4. Click "Publish" to make it live!

## Project Structure

- `/app` - Next.js pages and routes
- `/components` - Reusable UI components
- `/lib` - Sanity client and queries
- `/schemas` - Sanity content schemas
- `/public` - Static assets (images, etc.)
- `/types` - TypeScript type definitions

## Customization

- **Colors**: Edit `/app/globals.css` (CSS custom properties at the top)
- **City Name**: Update the hero section in `/components/HeroSection.tsx`
- **Agent Name**: Update the footer in `/app/page.tsx` and metadata in `/app/layout.tsx`
- **Hero Image**: Replace `/public/hero-image.jpg` with a new photo

## Deployment

This website is ready to deploy to Vercel (recommended):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables in Vercel's dashboard
4. Deploy!

## Support

For questions or issues, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
