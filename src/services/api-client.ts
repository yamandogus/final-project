import { base_url } from "../components/Bestseller/CokSatanlar";
import { getAccessToken, getRefreshToken, setTokenAndAuthUser } from "./storage";

const BASE_URL = base_url

export async function fetchWithAuth(url: string, options: RequestInit = {}){
    const accessToken = getAccessToken();

    if (!accessToken) {
      throw new Error("Access token not found. Please log in again.");
    }
  
    const tokenParts = accessToken.split(".");
    if (tokenParts.length !== 3) {
      throw new Error("Invalid access token format.");
    }
  
    const payload = JSON.parse(atob(tokenParts[1])) as {
      exp: number;
      iat: number;
      sub: number;
    };
  
    const isTokenExpired = new Date(payload.exp * 1000) < new Date();
  
    if (isTokenExpired) {
      const refreshToken = getRefreshToken();
      if (!refreshToken) {
        throw new Error("Session expired. Please log in again.");
      }
  
      const response = await fetch("http://localhost:3000/api/auth/refresh", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + refreshToken,
        },
      });
  
      if (!response.ok) {
        throw new Error("Failed to refresh token. Please log in again.");
      }
  
      const { accessToken: newAccessToken, refreshToken: newRefreshToken, user } = await response.json();
      setTokenAndAuthUser(newAccessToken, newRefreshToken, user);
    }

   const headers = {Authorization: "Bearer " + getAccessToken(),
    "Content-Type": "application/json",
    ...options.headers
   }
     

    return fetch(BASE_URL + url, {...options, headers})
}