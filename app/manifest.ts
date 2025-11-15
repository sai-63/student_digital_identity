import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'My PWA',
    short_name: 'Next PWA App',
    description: 'A Progressive Web App built with Next.js',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: 'C:/projects/next-js_projects/student_career_portal/public/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'C:/projects/next-js_projects/student_career_portal/public/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}