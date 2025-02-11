/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns:[
            { protocol: 'https', hostname: 'i.pinimg.com', port: '', search: ''}
        ]
        
    }
};

export default nextConfig;
