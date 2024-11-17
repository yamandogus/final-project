// src/components/Account/Informations/MyAccount.ts
import { AddedAddress } from "../../../services/type";
import { base_url } from "../../Bestseller/Bestseller";

export interface AccountProps {
  email: string;
  first_name: string;
  last_name: string;
  phone_number: null | string;
}

interface OrdersProps{
  order_no: string;
  order_status: string;
  created_at: string;
  total_price: number;
}

export async function userProfileLoader() {
  const accessToken = localStorage.getItem("access_token");
  if (!accessToken) {
    throw new Error("Access token bulunmadı");
  }

  // REFRESH
  const accessTokenPayload = JSON.parse(atob(accessToken.split(".")[1])) as {
    token_type: string;
    exp: number;
    iat: number;
    jti: string;
    user_id: number;
  };
  
  const exp = accessTokenPayload.exp;
  const expDate = new Date(exp * 1000);
  console.log(expDate);
  
  const now = new Date();
  const isPast = expDate < now;
  console.log(accessToken);
  
  console.log(isPast);
  
  if (isPast) {
    const refreshToken = localStorage.getItem("refresh_token");
    console.log(refreshToken);
    
    const refreshTokenResponse = await fetch(base_url + "/auth/token/refresh", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        refresh_token: refreshToken
      })
    });

    console.log(refreshTokenResponse);
    
    if (!refreshTokenResponse.ok) {
      const errorResponse = await refreshTokenResponse.json();
      console.error("Refresh token hatası:", errorResponse);
      throw new Error("Refresh token hatası");
  }

    const refreshTokenResponseJson = await refreshTokenResponse.json() as {
      access_token: string;
    };
    console.log(refreshTokenResponseJson);
    
    localStorage.setItem("access_token", refreshTokenResponseJson.access_token); 
    console.log("Yeni access token:", refreshTokenResponseJson.access_token);
  }

  

  // ACCOUNT
  const response = await fetch(base_url + "/users/my-account", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("access_token"), 
      "Content-Type": "application/json",
    },
  });

  const responseJson = await response.json();

  // ADRESS
  const responseAddress = await fetch(
    base_url + "/users/addresses?limit=10&offset=0",
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
        "Content-Type": "application/json",
      },
    }
  );
  const responseJsonAddress = await responseAddress.json();

  // orders
  const responseOrders = await fetch(base_url + "/orders",{
    method:"GET",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("access_token"),
      "Content-Type": "application/json",
    },
  })

  const responseOrdersJson = await responseOrders.json();
  
  console.log(responseOrdersJson);
  
  return {
    user: responseJson.data as AccountProps,
    datas: responseJsonAddress.data.results as AddedAddress[],
    orders: responseOrdersJson.data as OrdersProps[],
  };
}

export type userProfileLoaderReturn = Awaited<
  ReturnType<typeof userProfileLoader>
>;