export const isLocalhost = process.env.LOCAL === 'true';
export const isDevelopment = process.env.NODE_ENV === 'development';
export const isProduction = process.env.NODE_ENV === 'production';

export const getEnv = () => (isLocalhost ? 'development' : 'production');

// 环境变量配置
export const getBaseUrl = (): string => {
  // 优先使用环境变量
  if (process.env.BASE_URL) {
    return process.env.BASE_URL;
  }

  // 根据环境自动设置默认值
  if (isLocalhost || isDevelopment) {
    return 'http://localhost:3000';
  }

  if (isProduction) {
    // 生产环境使用 Vercel 域名或自定义域名
    return process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'https://netease-cloud-music-api-roan.vercel.app';
  }

  // 默认值
  return 'http://localhost:3000';
};

// 环境信息
export const getEnvironmentInfo = () => ({
  isLocalhost,
  isDevelopment,
  isProduction,
  environment: getEnv(),
  baseUrl: getBaseUrl(),
  vercelUrl: process.env.VERCEL_URL,
  nodeEnv: process.env.NODE_ENV,
});
