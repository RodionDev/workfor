import vstruct from 'varstruct';
export interface IContent {
  type: number;
}
export interface IPlainTextContent extends IContent {
  text: string;
}
const PlainTextContent = vstruct([
  { name: 'type', type: vstruct.UInt8 },
  { name: 'text', type: vstruct.VarString(vstruct.UInt16BE) },
]);
const Content =vstruct([
  { name: 'type', type: vstruct.UInt8 }
]);
const Followings = vstruct([
  { name: 'addresses', type: vstruct.VarArray(vstruct.UInt16BE, vstruct.Buffer(35)) },
]);
const address = vstruct.Buffer(35);
export {
  PlainTextContent,
  Content,
  Followings,
  address
}
