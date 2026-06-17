import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export", // Намного важнее всего: генерирует папку 'out' для GitHub Pages
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
                hostname: "ytimg.com", // Исправлено: убрали "://"
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "unsplash.com", // Исправлено: убрали "://"
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
