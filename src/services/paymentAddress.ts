import { base_url } from "../components/Bestseller/Bestseller";

export async function userAddressLoader(){

  //Adresses
    const response = await fetch(
        base_url + "/users/addresses?limit=10&offset=0",
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
            "Content-Type": "application/json",
          },
        }
      );
      const responseJson = await response.json();

  //Account
      const response1 = await fetch(base_url + "/users/my-account", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
          "Content-Type": "application/json",
        },
      });
      const responseJson1 = await response1.json();

  //Carts

  

      return {datas:responseJson.data.results, user: responseJson1.data};
}