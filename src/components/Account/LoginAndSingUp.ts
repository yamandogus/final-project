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
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(
      formData.entries()
    ) as unknown as RegisterPayload;
    console.log(data);

    data.password2 = data.password;
    data.api_key = "123456";

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
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(
      formData.entries()
    ) as unknown as LoginPayload;
    console.log(data);
    data.api_key = "1234567";

    const response = await fetch(base_url + "/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const jsonResponse = await response.json();
    console.log(jsonResponse);
  };