import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    basePath: "/MIND",
    assetPrefix: "/MIND/",
    env: {
        NEXT_PUBLIC_BASE_PATH: "/MIND",
    },
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "://ytimg.com",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "://unsplash.com",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
