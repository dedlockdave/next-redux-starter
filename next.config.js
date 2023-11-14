/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    typescript: {
        ignoreBuildErrors: true,
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback.fs = false
        }
        config.module.rules.push({
            test: /\.node/,
            use: "raw-loader",
        })
        return config
    },
    reactStrictMode: true,
    swcMinify: true,
}

module.exports = nextConfig
