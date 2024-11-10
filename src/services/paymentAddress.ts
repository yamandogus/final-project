import { base_url } from "../components/Bestseller/Bestseller";

export async function userAddressLoader(){

try {
    //Adresses
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
    console.log(responseJsonAddress);
    

//Account
    const responseAccount = await fetch(base_url + "/users/my-account", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
        "Content-Type": "application/json",
      },
    });
    const responseJsonAccount = await responseAccount.json();
    console.log(responseJsonAccount);

//UserCart
const responseCart = await fetch(base_url + "/users/cart", {
  method: "GET",
  headers: {
    Authorization: "Bearer " + localStorage.getItem("access_token"),
    "Content-Type": "application/json",
  },
});
const responseJsonCart = await responseCart.json();

    return {datas:responseJsonAddress.data.results || [], user: responseJsonAccount.data || null, userCart: responseJsonCart.data || {}};
} catch (error) {
  console.log("Veri alınamadı", error);
  return{datas:[], user: null,userCart:{}}
}  
}