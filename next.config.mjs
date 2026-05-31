/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        dangerouslyAllowSVG: true,
        unoptimized: true
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    trailingSlash: true,
    webpack: (config, { dev }) => {
        if (dev) {
            config.cache = false
        }
        return config
    },
};

export default nextConfig;
