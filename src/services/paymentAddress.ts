import { base_url } from "../components/Bestseller/Bestseller";

export async function userAddressLoader(){
  try {
    const [responseAddress, responseAccount, responseCart,responseCity] = await Promise.all([
      fetch(
        base_url + "/users/addresses?limit=10&offset=0",
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
            "Content-Type": "application/json",
          },
        }
      ),
      fetch(base_url + "/users/my-account", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
          "Content-Type": "application/json",
        },
      }),
      fetch(base_url + "/users/cart", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
          "Content-Type": "application/json",
        }
      }),
      fetch(
        base_url + "/world/region?limit=81&offset=0&country-name=turkey"
      )
    ]);
    const responseJsonAddress = await responseAddress.json();
    const responseJsonAccount = await responseAccount.json();
    const responseJsonCart = await responseCart.json();
    const responseJsonCity = await responseCity.json();
    return {datas:responseJsonAddress.data.results || [], user: responseJsonAccount.data || null, userCart: responseJsonCart.data || {},cityData: responseJsonCity.data.results || []};
  } catch (error) {
    console.log("Veri alınamadı", error);
    return{datas:[], user: null,userCart:{},responseJsonCity:[]};
  }
}