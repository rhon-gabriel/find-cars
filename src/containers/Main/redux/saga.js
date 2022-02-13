import { all, takeLatest, put, call } from "redux-saga/effects";
import {
  GET_MANUFACTURERS_START,
  GET_MANUFACTURERS_SUCCESS,
  GET_MANUFACTURERS_FAILURE,
  GET_MODELS_START,
  GET_MODELS_SUCCESS,
  GET_MODELS_FAILURE,
} from "./constants";
import { getManufacturers, getModels } from "../../../helpers/api/cars";

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
    console.log("res", res);
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

export default function* carsSaga() {
  yield all([
    takeLatest(GET_MANUFACTURERS_START, getManufacturersSaga),
    takeLatest(GET_MODELS_START, getModelsSaga),
  ]);
}
