import { base_url } from "../../../../components/Bestseller/BestsellerPage";
import { AddedAddress, CityProps } from "../../../../services/Type";

export interface AccountProps {
  email: string;
  first_name: string;
  last_name: string;
  phone_number: null | string;
}

interface OrdersProps {
  order_no: string;
  order_status: string;
  created_at: string;
  total_price: number;
  cart_detail: [
    {
      variant_id: string;
      name: string;
      photo_src: string;
      pieces: string;
      unit_price: string;
      total_price: string;
      slug: string;
    }
  ];
}
async function refreshAccessToken() {
  const accessToken = localStorage.getItem("access_token");
  if (!accessToken) return;

  const accessTokenPayload = JSON.parse(atob(accessToken.split(".")[1])) as {
    exp: number;
  };

  const expDate = new Date(accessTokenPayload.exp * 1000);
  const now = new Date();

  if (expDate < now) {
    const refreshToken = localStorage.getItem("refresh_token");
    if (!refreshToken) {
      console.error("Refresh token bulunamadı");
      return;
    }

    try {
      const response = await fetch(base_url + "/auth/token/refresh", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refresh_token: refreshToken }),
      });

      if (!response.ok) {
        console.error(
          "Refresh token yenileme başarısız:",
          await response.json()
        );
        return;
      }

      const data = await response.json();
      localStorage.setItem("access_token", data.access_token);
      console.log("Yeni access token alındı:", data.access_token);
    } catch (error) {
      console.error("Token yenileme sırasında hata:", error);
    }
  }
}

export function startTokenRefreshInterval() {
  const intervalId = setInterval(() => {
    refreshAccessToken();
    console.log("kontrol edildi");
  }, 2 * 60 * 1000);
  return intervalId;
}

export async function userProfileLoader() {
  try {
    const [responseAccount, responseAddress, responseOrders, responseCity] =
      await Promise.all([
        fetch(base_url + "/users/my-account", {
          method: "GET",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
            "Content-Type": "application/json",
          },
        }),
        fetch(base_url + "/users/addresses?limit=10&offset=0", {
          method: "GET",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
            "Content-Type": "application/json",
          },
        }),
        fetch(base_url + "/orders", {
          method: "GET",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
            "Content-Type": "application/json",
          },
        }),
        fetch(base_url + "/world/region?limit=81&offset=0&country-name=turkey"),
      ]);
    const [
      responseAccountJson,
      responseAddressJson,
      responseOrdersJson,
      responseCityJson,
    ] = await Promise.all([
      responseAccount.json(),
      responseAddress.json(),
      responseOrders.json(),
      responseCity.json(),
    ]);

    console.log("TEST", responseCityJson);

    return {
      user: responseAccountJson.data as AccountProps,
      datas: (responseAddressJson?.data?.results as AddedAddress[]) || [],
      orders: responseOrdersJson.data as OrdersProps[],
      citysData: (responseCityJson.data.results as CityProps[]) || [],
    };
  } catch (error) {
    console.log("data çekilemedi", error);
    return {
      user: {} as AccountProps,
      datas: [],
      orders: [],
      citysData: [],
    };
  }
}

export type userProfileLoaderReturn = Awaited<
  ReturnType<typeof userProfileLoader>
>;
