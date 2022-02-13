import { GET_MODELS_START, GET_MANUFACTURERS_START, GET_VEHICLES_START } from "./constants";

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

export function getVehicles(params) {
  return {
    type: GET_VEHICLES_START,
    payload: params,
  };
}
