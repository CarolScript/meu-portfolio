/** @type {import('next').NextConfig} */
const nextConfig = {
  
  output: 'export',
  basePath: '/meu-portfolio', // Nome do repositório no GitHub
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
