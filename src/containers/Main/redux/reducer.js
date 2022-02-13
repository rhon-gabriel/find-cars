import {
  GET_MANUFACTURERS_START,
  GET_MANUFACTURERS_SUCCESS,
  GET_MANUFACTURERS_FAILURE,
  GET_MODELS_START,
  GET_MODELS_SUCCESS,
  GET_MODELS_FAILURE,
  GET_VEHICLES_START,
  GET_VEHICLES_SUCCESS,
  GET_VEHICLES_FAILURE,
} from "./constants";

const initialState = {
  manufacturers: null,
  models: null,
  vehicles: null,
  loading: false,
  errorMake: false,
  errorModel: false,
  errorVehicles: false,
};

export default function carsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MANUFACTURERS_START:
      return {
        ...state,
        loading: true,
        errorMake: false,
      };
    case GET_MANUFACTURERS_SUCCESS:
      return {
        ...state,
        manufacturers: action.manufacturers,
        loading: false,
        errorMake: false,
      };
    case GET_MANUFACTURERS_FAILURE:
      return {
        ...state,
        loading: false,
        errorMake: true,
      };
    case GET_MODELS_START:
      return {
        ...state,
        loading: true,
        errorModel: false,
      };
    case GET_MODELS_SUCCESS:
      return {
        ...state,
        models: action.models,
        loading: false,
        errorModel: false,
      };
    case GET_MODELS_FAILURE:
      return {
        ...state,
        loading: false,
        errorModel: true,
      };
      case GET_VEHICLES_START:
      return {
        ...state,
        loading: true,
        errorModel: false,
      };
    case GET_VEHICLES_SUCCESS:
      return {
        ...state,
        vehicles: action.vehicles,
        loading: false,
        errorVehicles: false,
      };
    case GET_VEHICLES_FAILURE:
      return {
        ...state,
        loading: false,
        errorVehicles: true,
      };
    default:
      return state;
  }
}
