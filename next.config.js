const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['tsx', 'ts', 'md', 'mdx'],
  // Deployment marker: 2025-07-16T10:42:00Z
};

module.exports = withMDX(nextConfig);
