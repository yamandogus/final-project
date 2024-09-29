import { FormEvent } from "react";
import { base_url } from "../Bestseller/CokSatanlar";
interface RegisterPayload {
    email: string;
    password: string;
    password2?: string;
    api_key?: string;
    first_name: string;
    last_name: string;
  }
  
  interface LoginPayload{
    email: string,
    password: string,
    api_key?: string,
  }

export const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    const fomrEl = e.target as HTMLFormElement
    const formData = new FormData(fomrEl);
    const data = Object.fromEntries(
      formData.entries()
    ) as unknown as RegisterPayload;

    data.password2 = data.password;
    data.api_key = "100807";

    const response = await fetch(base_url + "/auth/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const jsonResponse = await response.json();
    console.log(jsonResponse);
  };
  export const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    const formEl = e.target as HTMLFormElement
    const formData = new FormData(formEl);
    const data = Object.fromEntries(
      formData.entries()
    ) as unknown as LoginPayload;
    data.api_key = "100807";

    console.log(data);
    

    const response = await fetch(base_url + "/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    

    const jsonResponse = await response.json() as 
    {
      user:LoginPayload,
      accessToken: string,
      refreshToken: string,
    }

    console.log(jsonResponse);
    

  };