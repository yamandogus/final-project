import { base_url } from "../components/Bestseller/BestsellerPage";

export const deleteAddress = async (
  id: string,
  showSnackbar: (message: string, severity: "success" | "error") => void
) => {
  try {
    const response = await fetch(base_url + `/users/addresses/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error('Silme işlemi başarısız');
    }

    await response.json();
    showSnackbar("Adres silindi", "success");
    return true;
  } catch (error) {
    console.log(error);
    showSnackbar("Adres silinemedi", "error");
    throw error;
  }
};