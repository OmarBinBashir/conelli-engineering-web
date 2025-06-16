export type Project = {
  slug: string;
  title: string;
  category: 'Infrastructure' | 'Commercial' | 'Residential' | 'Real Estate' | 'Industrial';
  status: 'Completed' | 'Ongoing' | 'Future';
  coverImage: string; // URL to the image
  description: string;
  details: {
    client: string;
    duration: string;
    scope: string;
  };
  gallery: string[]; // Array of image URLs
}; 