import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import { firestore, retrieveShopData } from "../../firebase/firebase.utils";
import { fetchShopdataFailure, fetchShopdataSuccess } from "./shop.action";
import ShopActionType from "./shop.actionType";

export function* fetchCollectionsAsync() {
  try {
    const collRef = firestore.collection("collections");
    const snapShot = yield collRef.get();
    const convertSnapshotToShopData = yield call(retrieveShopData, snapShot);
    yield put(fetchShopdataSuccess(convertSnapshotToShopData));
  } catch (error) {
    yield put(fetchShopdataFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(ShopActionType.FETCH_SHOPDATA_START, fetchCollectionsAsync);
}

export function* shopSaga() {
  yield all([call(fetchCollectionsStart)]);
}
