import { FormEvent } from "react";
import { base_url } from "../components/Bestseller/Bestseller";


export interface UpdateProps {
  first_name: string;
  last_name: string;
  phone_number: string;
}

export const upadeteAccount = async (e: FormEvent, phone:string) => {
   e.preventDefault();
 try {
  const formEl = e.target as HTMLFormElement;
  const formData = new FormData(formEl);
  const data = Object.fromEntries(formData.entries()) as unknown as UpdateProps;
  data.phone_number = phone
  const response = await fetch(base_url + "/users/my-account", {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      Authorization: "Bearer " + localStorage.getItem("access_token"),
      "Content-Type": "application/json",
    },
  });
  const responseJson = await response.json()
  console.log(responseJson);

 } catch (error) {
  console.log(error);
 }
};
