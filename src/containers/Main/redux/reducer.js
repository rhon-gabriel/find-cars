import {
    GET_MODELS_START,
    GET_MODELS_SUCCESS,
    GET_MODELS_FAILURE,
  } from "./constants";
  
  const initialState = {
    models: null,
    loadingModels: false,
    errorModels: false,
  };
  
  export default function carsReducer(state = initialState, action) {
    switch (action.type) {
      case GET_MODELS_START:
        return {
          ...state,
          loadingModels: true,
          errorModels: false,
        };
      case GET_MODELS_SUCCESS:
        return {
          ...state,
          models: action.models,
          loadingModels: false,
          errorModels: false,
        };
      case GET_MODELS_FAILURE:
        return {
          ...state,
          loadingModels: false,
          errorModels: true,
        };
      default:
        return state;
    }
  }