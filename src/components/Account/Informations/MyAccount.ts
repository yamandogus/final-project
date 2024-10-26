import { base_url } from "../../Bestseller/Bestseller";

export interface AccountProps {
  email: string;
  first_name: string;
  last_name: string;
  phone_number: null | string; // phone_number null veya string olabilir
}

export async function userProfileLoader() {
  const response = await fetch(base_url + "/users/my-account", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("access_token"),
      "Content-Type": "application/json",
    },
  });

  const responseJson = await response.json();
  console.log(localStorage.getItem("access_token"));
  console.log(responseJson);

  // Eğer API yanıtı { status: "success", data: { ... } } şeklindeyse
  return { user: responseJson.data as AccountProps };
}

export type userProfileLoaderReturn = Awaited<ReturnType<typeof userProfileLoader>>;