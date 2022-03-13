export const enum UserActionTypes {
  PRIVATE_KEY_SUBMIT = '@@user/PRIVATE_KEY_SUBMIT',
  PRIVATE_KEY_VERIFYING = '@@user/PRIVATE_KEY_VERIFYING',
  PRIVATE_KEY_VERIFY_FAILED = '@@user/PRIVATE_KEY_VERIFY_FAILED',
  PRIVATE_KEY_VERIFY_SUCCESS = '@@user/PRIVATE_KEY_VERIFY_SUCCESS'
};
export interface UserState {
  readonly privateKey: string;
  readonly loading: boolean;
}
