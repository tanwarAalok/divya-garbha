import { createClient } from '@sanity/client';

export default createClient({
  projectId: 'u8hmhegz', 
  dataset: 'production', 
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: '2025-07-26', // use a UTC date in YYYY-MM-DD format
});