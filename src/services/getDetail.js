import axios from "axios";
import { baseURL } from "../constants/baseURL";
export async function getMovieDetail(id) {
  try {
    const url = baseURL + `i=${id}`;
    let response = await axios({
      headers: { Accept: "application/json" },
      method: "GET",
      url,
    });
    return response;
  } catch (error) {
    console.log("Error: ", error);
  }
}
