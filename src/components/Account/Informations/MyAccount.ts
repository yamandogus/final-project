import { base_url } from "../../Bestseller/Bestseller";

export interface AccountProps {
  email: string;
  first_name: string;
  last_name: string;
  phone_number: null | string; 
}

export async function userProfileLoader() {
  const accessToken = localStorage.getItem("access_token");
  if(!accessToken){
    throw new Error("Access token not found");
  }
   const response = await fetch(base_url + "/users/my-account", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
  });

  const responseJson = await response.json();
  console.log("access_token:" + localStorage.getItem("access_token"));
  console.log(responseJson);
  

  return { user: responseJson.data as AccountProps };
}

export type userProfileLoaderReturn = Awaited<ReturnType<typeof userProfileLoader>>;