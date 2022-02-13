import axios from "axios";

export async function getManufacturers() {
  return await axios.get(`http://localhost:8080/api/makes`);
}

export async function getModels(manufacturer) {
  return await axios.get("http://localhost:8080/api/models", {
    params: { make: manufacturer },
  });
}

export async function getVehicles(params) {
  console.log("params", params);
  return await axios.get("http://localhost:8080/api/vehicles", {
    params: params,
  });
}
