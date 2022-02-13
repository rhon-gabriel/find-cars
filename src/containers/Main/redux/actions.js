import { GET_MODELS_START, GET_MANUFACTURERS_START } from "./constants";

export function getManufacturers() {
  return {
    type: GET_MANUFACTURERS_START,
  };
}

export function getModels(manufacturer) {
  return {
    type: GET_MODELS_START,
    payload: manufacturer,
  };
}
