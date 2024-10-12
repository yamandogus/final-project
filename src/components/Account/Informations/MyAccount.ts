
import { base_url } from "../../Bestseller/BestSellers";
interface AccountProps {
  email: string;
  first_name: string;
  last_name: string;
  phone_number: null;
}

export async function userProfileLoader() {
  const response = await fetch(base_url + "/users/my-account", {
    method:"GET",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("access_token"),
      "Content-Type": "application/json",
    }
  })
  const responseJson = (await response.json()) as AccountProps;
  console.log(localStorage.getItem("access_token"));
  
  console.log(responseJson);
  
  return{user: responseJson}
}

export type userProfileLoaderReturn = Awaited<ReturnType<typeof userProfileLoader>>