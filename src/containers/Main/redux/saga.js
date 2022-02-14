import { all, takeLatest, put, call } from "redux-saga/effects";
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
import { getManufacturers, getModels, getVehicles } from "../../../helpers/api/cars";

export function* getManufacturersSaga() {
  try {
    const res = yield call(getManufacturers);
    yield put({
      type: GET_MANUFACTURERS_SUCCESS,
      manufacturers: res.data,
    });
  } catch (errorMake) {
    yield put({
      type: GET_MANUFACTURERS_FAILURE,
      errorMake,
    });
    console.log("error fetching manufacturers");
  }
}

export function* getModelsSaga(action) {
  try {
    const res = yield call(getModels, action.payload);
    yield put({
      type: GET_MODELS_SUCCESS,
      models: res.data,
    });
  } catch (errorModel) {
    yield put({
      type: GET_MODELS_FAILURE,
      errorModel,
    });
    console.log("error fetching models");
  }
}

export function* getVehiclesSaga(action) {
  try {
    const res = yield call(getVehicles, action.payload);
    yield put({
      type: GET_VEHICLES_SUCCESS,
      vehicles: res.data,
    });
  } catch (errorVehicles) {
    yield put({
      type: GET_VEHICLES_FAILURE,
      errorVehicles,
    });
    console.log("error fetching vehicles");
  }
}

export default function* carsSaga() {
  yield all([
    takeLatest(GET_MANUFACTURERS_START, getManufacturersSaga),
    takeLatest(GET_MODELS_START, getModelsSaga),
    takeLatest(GET_VEHICLES_START, getVehiclesSaga),
  ]);
}
