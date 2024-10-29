import { base_url } from "../components/Bestseller/Bestseller";

export async function userAddressLoader(){
    console.log("test");
    
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

      return {datas:responseJson.data.results};
}