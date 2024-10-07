import { base_url } from "../../Bestseller/CokSatanlar";

export async function Country() {
    const response = await fetch(base_url + "/world/region?limit=81&offset=0&country-name=turkey");
    const responseJson = await response.json()
    console.log(responseJson.data.results);
    return{data: responseJson.data.results}
}