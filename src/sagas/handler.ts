import { put, call } from 'redux-saga/effects';
import { UserAction, doPrivateKeyVerifying, doPrivateKeyVerifyFailed, doPrivateKeyVerifySuccess } from '../store/user';
import { getAccountSummary } from '../api'
import { generateKey } from './helper';
function *handlePrivateKeySubmit(action: UserAction) {
  yield put(doPrivateKeyVerifying());
  const { privateKey } = action.payload;
  try {
    const publicKey = generateKey(privateKey);
    const accountSummary = yield call(getAccountSummary, publicKey);
    yield put(doPrivateKeyVerifySuccess(privateKey, accountSummary));
  } catch (err) {
    yield put(doPrivateKeyVerifyFailed(privateKey));
  }
}
export {
  handlePrivateKeySubmit
}
