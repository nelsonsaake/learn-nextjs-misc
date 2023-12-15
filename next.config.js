/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    images: { unoptimized: true },
    redirects: async () => {
        return [
            {
                source: '/about',
                destination: '/',
                permanent: true,
            }
        ]
    }
}

module.exports = nextConfig
