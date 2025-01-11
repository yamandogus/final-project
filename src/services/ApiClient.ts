import { base_url } from "../components/Bestseller/BestsellerPage";
import { getAccessToken, getRefreshToken, setTokenAndAuthUser } from "./Storage";

export async function fetchWithAuth(url: string, options: RequestInit = {}) {
  const access_token = getAccessToken();
  if (!access_token) {
    throw new Error("Access token not found. Please log in again.");
  }
  const tokenParts = access_token.split(".");
  if (tokenParts.length !== 3) {
    throw new Error("Invalid access token format.");
  }
  const payload = JSON.parse(atob(tokenParts[1])) as {
    exp: number;
    iat: number;
    jti: string;
    user_id: number;
  };
  const isTokenExpired = new Date(payload.exp * 1000) < new Date();

  if (isTokenExpired) {
    const refresh_token = getRefreshToken();
    if (!refresh_token) {
      throw new Error("Session expired. Please log in again.");
    }

    const response = await fetch(base_url+ "/auth/token/refresh",{
        method: "POST",
        headers: {
          Authorization: "Bearer " + refresh_token,
        }, 
    });
    if(!response.ok){
        throw new Error("Failed to refresh token. Please log in again.");
    }
    const {access_token: newAccessToken, refresh_token: newRefreshToken} = await response.json();
    setTokenAndAuthUser(newAccessToken, newRefreshToken)
  }
  const headers = {Authorization: "Bearer " + getAccessToken(),
    "Content-Type": "application/json",
    ...options.headers
   }
   return fetch(base_url + url, {...options, headers})
}
