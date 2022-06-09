import { IContent, PlainTextContent, Content, Followings, address } from './struct';
import base32 from 'base32.js';
const contentEncode = (content: IContent) => {
  const { type } = content;
  switch(type) {
    case 1: {
      return PlainTextContent.encode(content);
    }
  }
}
const contentDecode = (content: Buffer) => {
  const { type } = typeDecode(content);
  switch(type) {
    case 1: {
      return PlainTextContent.decode(content);
    }
  }
}
const followingEncode = (followings: string[]) => {
  const addresses = followings.map(following => {
    return address.encode(Buffer.from(base32.decode(following)));
  })
  const value = {
    addresses
  }
  return Followings.encode(value);
}
const followingDecode = (value: Buffer) => {
  try {
    const data = Followings.decode(value);
    return data.addresses.map(address => {
      return base32.encode(address);
    })
  } catch (err) {
    return [];
  }
}
const typeDecode = (content: Buffer) => {
  return Content.decode(content);
}
export {
  contentEncode,
  contentDecode,
  typeDecode,
  followingEncode,
  followingDecode
}
