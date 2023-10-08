/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[
            {
                hostname: "i.annihil.us",
                protocol: 'http',
                port: '',
                pathname:'/**'
            }
        ]
    }
}

module.exports = nextConfig