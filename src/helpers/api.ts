import { getBaseUrl } from './env';

// 动态获取 BASE_URL
export const BASE_URL = getBaseUrl();

export const prefixApiUrl = (url: string) => `${BASE_URL}${url}`;
