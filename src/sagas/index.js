import { take, put, call, takeEvery, select } from "redux-saga/effects";
import {
  requestData,
  requestDataError,
  refresh,
  requestDataSuccess,
  currentState,
} from "../actions";
import { collection } from "../firebase_config";


//worker saga
function* fetchDairyCards() {
  try {
    yield put(requestData());
    const data = yield call(() => {
      return collection
        .orderByKey()
        .once("value")
        .then(function (snapshot) {
          return snapshot.val();
        });
    });
    yield put(requestDataSuccess(data));
  } catch (error) {
    console.log(error);
    yield put(requestDataError());
  }
}

function* add() {
  const state = yield select();
  yield put(currentState(state));
  let data = {
    key: state.todos.key,
    title: state.todos.title,
    text: state.todos.text,
  };
  collection.child(state.DiaryCards.data.length + 1).set(data);
  yield put(refresh());
}

// watcher saga
export default function* rootSaga() {
  yield take("FETCH_DATA");
  yield call(fetchDairyCards);
  yield takeEvery("ADD_TODO", add);
  yield takeEvery("REFRESH", fetchDairyCards);
}

//export default function* rootSaga(){
//     yield takeEvery('Hello', workerSaga);
//     yield take('Login');
//     yield call(workerSaga);
//     yield take('Logout');
//     yield call(workerSaga);
//
//}
