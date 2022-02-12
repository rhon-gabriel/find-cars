import axios from "axios";

export async function getModels() {
  return await axios.get(`http://localhost:8080/api/makes`);
}
