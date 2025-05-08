/**
 * Utility functions for the application
 */

/**
 * Returns the correct path for assets in both development and production environments
 * In production (GitHub Pages), prepends the base path (/Portfolio)
 * 
 * @param path The asset path (e.g., /images/profile.png)
 * @returns The correct path with base path if needed
 */
export function getAssetPath(path: string): string {
  // Check if we're in production (GitHub Pages)
  const isProduction = process.env.NODE_ENV === 'production';
  
  // If the path already starts with the base path or is an external URL, return it as is
  if (path.startsWith('http') || path.startsWith('/Portfolio')) {
    return path;
  }
  
  // Add the base path in production
  return isProduction ? `/Portfolio${path}` : path;
}
