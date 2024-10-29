import { base_url } from "../components/Bestseller/Bestseller";


export const deleteAddress = async (id: string,showSnackbar: (message: string, severity: "success" | "error") => void, refreshAddress:()=> void) => {
  try {
    const response = await fetch(base_url + `/users/addresses/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
        "Content-Type": "application/json",
      },
    });
    const responseJson = await response.json();
    console.log(responseJson);
    showSnackbar("Adres silindi", "success");
    refreshAddress()
  } catch (error) {
    console.log(error);
    showSnackbar("Adres silinemedi", "error");
  }
};
