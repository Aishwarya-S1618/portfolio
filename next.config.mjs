/** @type {import('next').NextConfig} */
const nextConfig = {output: 'export', // This is the crucial part for static export

  // Optional: Set a base path for GitHub Pages if your repo name is not the domain
  // Example: 'https://<your-username>.github.io/<repo-name>' -> basePath: '/<repo-name>'
  // Replace '<your-repo-name>' with the actual name of your GitHub repository.
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' : '',
  // Note: If you're deploying to https://<your-username>.github.io/ (without a repo name path)
  // then you can omit basePath and assetPrefix.
  reactStrictMode: true,
  };

export default nextConfig;
