import { base_url } from "../../Bestseller/CokSatanlar";

interface AccountProps {
  email: string;
  first_name: string;
  last_name: string;
  phone_number: null;
}

export async function MyAccountLoader() {
  const response = await fetch(base_url + "/users/my-account", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("access_token")
  }
});
  const responseJson = (await response.json()) as AccountProps;
  console.log(responseJson);
  
  return{user: responseJson}
}

export type MyAccountReturn = Awaited<ReturnType<typeof MyAccountLoader>>;