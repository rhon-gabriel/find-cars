import { takeLatest, put, call } from "redux-saga/effects";
import {
    GET_MODELS_START,
    GET_MODELS_SUCCESS,
    GET_MODELS_FAILURE,
  } from "./constants";
import {
  getModels,
} from "../../../helpers/api/cars"

export function* getModelsSaga(action) {
  try {
    const res = yield call(getModels);
    console.log('res', res)
    yield put({
      type: GET_MODELS_SUCCESS,
      models: res.data
    });
  } catch (error) {
    yield put({
      type: GET_MODELS_FAILURE,
      error,
    });
    console.log("error fetching models");
  }
}

export default function* carsSaga() {
  yield takeLatest(GET_MODELS_START, getModelsSaga);
}
