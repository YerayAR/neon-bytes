const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [require('remark-frontmatter'), require('remark-mdx-frontmatter')],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['tsx', 'ts', 'md', 'mdx'],
};

module.exports = withMDX(nextConfig);
