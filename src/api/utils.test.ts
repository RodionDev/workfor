import { endpoint, get, applyValue } from './utils';
import { pipe } from 'ramda';
import { API_URL, DATABASE, ACCOUNT_SUMMARY } from './constants';
describe('Build API utils work right', () => {
  it('Should build database/v1/get_account_summary api', () => {
    const api = pipe(
      endpoint(DATABASE),
      get(ACCOUNT_SUMMARY),
      applyValue('GB730')
    )(API_URL)
    expect(api).toEqual('http:
  })
});
