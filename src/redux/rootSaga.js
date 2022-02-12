import { all } from "redux-saga/effects";
import carsSaga from "../containers/Main/redux/saga";

export default function* rootSaga() {
  yield all([carsSaga()]);
}
