# Conelli Engineering Website

This is the official website for Conelli Engineering Limited, built with Next.js, TypeScript, and Tailwind CSS.
<!-- Test commit for deployment fix -->
## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env.local` file by copying `.env.local.example` (if it exists) and fill in the required environment variables:
   - Sanity CMS configuration
   - Resend email service API key
   - Cloudinary cloud name

3. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/              # Next.js app directory
├── components/       # React components
├── constants/        # Application constants
├── lib/             # Utility functions
└── types/           # TypeScript type definitions
```

## Environment Variables

The following environment variables are required:

- `NEXT_PUBLIC_SANITY_PROJECT_ID`: Your Sanity project ID
- `NEXT_PUBLIC_SANITY_DATASET`: Sanity dataset name (default: "production")
- `NEXT_PUBLIC_SANITY_API_VERSION`: Sanity API version
- `NEXT_PUBLIC_SANITY_TOKEN`: Sanity API token
- `RESEND_API_KEY`: Resend email service API key
- `INQUIRY_RECIPIENT_EMAIL`: Email address for form submissions
- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`: Cloudinary cloud name

## Technologies Used

- Next.js 14
- TypeScript
- Tailwind CSS
- ShadCN UI
- Sanity CMS
- Resend (Email Service)
- Cloudinary (Image CDN)
