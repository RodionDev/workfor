const endpoint = (ep: string) => (str: string) => `${str}${ep}`;
const get = (method: string) => (str: string) => `${str}/get_${method}`;
const applyValue = (value: string) => (str: string) => `${str}/${value}`;
export {
  endpoint,
  get,
  applyValue
}
