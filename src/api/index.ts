import { endpoint, get, applyValue } from './utils';
import { DATABASE, ACCOUNT_SUMMARY, API_URL, USER_INFO, FOLLOWER } from './constants';
import { pipe } from 'ramda';
import axios from 'axios';
const test = async () => {
  const { data } = await pipe(
    endpoint(DATABASE),
    get(ACCOUNT_SUMMARY),
    applyValue('GB73OPHUZC3RSDEU2LYV5T7MEAN2Q26HYQPDYIENGNBUHW5CXAQ6UJOO'),
    axios.get
  )(API_URL);
  console.log(data);
}
const getAccountSummary = async (publicKey: string) => {
  const { data } = await pipe(
    endpoint(DATABASE),
    get(ACCOUNT_SUMMARY),
    applyValue(publicKey),
    axios.get
  )(API_URL);
  return data;
}
const getUserInfos = async (publicKeys: string[]) => {
  const promises = publicKeys.map(async publicKey => {
    const { data } = await pipe(
      endpoint(DATABASE),
      get(ACCOUNT_SUMMARY),
      applyValue(publicKey),
      axios.get
    )(API_URL);
    return {...data.result}
  })
  return await Promise.all(promises);
}
const getFollower = async (publicKey: string) => {
  const { data } = await pipe(
    endpoint(DATABASE),
    get(FOLLOWER),
    applyValue(publicKey),
    axios.get
  )(API_URL);
  return data.result
}
export { 
  test,
  getAccountSummary,
  getUserInfos,
  getFollower
}
