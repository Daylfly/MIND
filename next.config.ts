import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    basePath: "/MIND",    // Указывает правильный путь для страниц
    assetPrefix: "/MIND/", // ОБЯЗАТЕЛЬНО: Указывает правильный путь для стилей и скриптов

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
