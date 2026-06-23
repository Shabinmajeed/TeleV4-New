import { Platform } from 'react-native';

const getBaseUrl = (): string => {
  if (__DEV__) {
    // Use local IP for device testing, localhost for simulator
    if (Platform.OS === 'android') {
      return 'http://10.0.2.2:3000';
    }
    return 'http://localhost:3000';
  }
  return process.env.EXPO_PUBLIC_API_URL || 'https://api.telehealings.com';
};

export const API_BASE_URL = getBaseUrl();

export async function apiFetch<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Unknown error' }));
    throw new Error(error.message || `HTTP ${response.status}`);
  }

  return response.json();
}
