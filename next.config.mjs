/** @type {import('next').NextConfig} */

// On GitHub Pages a project site is served from /<repo-name>, so the build
// needs a basePath. The deploy workflow passes PAGES_BASE_PATH automatically.
// Locally it is empty, so `npm run dev` works at the root as usual.
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: import.meta.dirname,
  output: "export",
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
};

export default nextConfig;
