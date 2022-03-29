const endpoint = (ep: string) => (str: string) => `${str}${ep}`;
const call = (method: string) => (str: string) => `${str}${method}`;
const applyValue = (value: string) => (str: string) => `${str}/${value}`;
export {
  endpoint,
  call,
  applyValue
}
