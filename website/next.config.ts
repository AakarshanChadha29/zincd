import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this app directory. A stray lockfile outside the
  // project otherwise makes Next.js infer the wrong root during build.
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
