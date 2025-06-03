import axios, { AxiosResponse } from "axios";

interface ApiResponse<T> {
  resultType: string;
  error?: {
    errorType?: string;
    reason?: string;
    title?: string;
  } | null;
  success: T | null;
}

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || process.env.API_BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const handleApiResponse = <T>(
  response: AxiosResponse<ApiResponse<T | null>>
): T | null => {
  if (response.data.resultType !== "SUCCESS") {
    throw new Error("API call failed: Unexpected resultType");
  }

  if (response.data?.error != null) {
    throw new Error(response.data.error?.reason || "Unknown error occurred");
  }
  console.log("response data", response.data.success);
  return response.data.success;
};

export function getJWTHeader(accessToken: string): Record<string, string> {
  return { Authorization: `Bearer ${accessToken}` };
}
