import { base_url } from "../../Bestseller/Bestseller";
const accessToken = localStorage.getItem("access_token");

const accessTokenPayload = JSON.parse(atob(accessToken.split(".")[1])) as {
    token_type: string;
    exp: number;
    iat: number;
    jti: string;
    user_id: number;
  };
  const exp = accessTokenPayload.exp;
  const expDate = new Date(exp * 1000);
  const now = new Date();
  console.log(expDate < now);

  // Refresh
  if (expDate < now) {
    try {
      const refreshToken = localStorage.getItem("refresh_token");
      if (!refreshToken) {
        throw new Error("Refresh token bulunmadı");
      }
      const responseRefresh = await fetch(base_url + "/auth/token/refresh", {
        method: "POST",
        headers: {      
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          refresh_token: refreshToken,
        }),
      });

      const responseRefreshJson = await responseRefresh.json();
      localStorage.setItem("access_token", responseRefreshJson.access_token);
    } catch (error) {
      console.log("Refresh yapılamadı", error);
      throw error;
    }
  }

