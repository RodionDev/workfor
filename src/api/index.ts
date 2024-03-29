import { endpoint, call, applyValue } from './utils';
import { DATABASE, ACCOUNT_SUMMARY, API_URL, USER_INFO, FOLLOWER, COMMIT, CREATE, RPC_COMMIT, POSTS, FOLLOWING, ALL_USERS, NEW_FEEDS, PAYMENTS } from './constants';
import { pipe } from 'ramda';
import axios from 'axios';
import { contentEncode, followingEncode, contentDecode } from './encoder';
import { sign, encode } from './tx';
const test = async () => {
  const { data } = await pipe(
    endpoint(DATABASE),
    call(ACCOUNT_SUMMARY),
    applyValue('GB73OPHUZC3RSDEU2LYV5T7MEAN2Q26HYQPDYIENGNBUHW5CXAQ6UJOO'),
    axios.get
  )(API_URL);
  console.log(data);
}
const getAccountSummary = async (publicKey: string) => {
  const { data } = await pipe(
    endpoint(DATABASE),
    call(ACCOUNT_SUMMARY),
    applyValue(publicKey),
    axios.get
  )(API_URL);
  return data;
}
const getUserInfos = async (publicKeys: string[]) => {
  const promises = publicKeys.map(async publicKey => {
    const { data } = await pipe(
      endpoint(DATABASE),
      call(ACCOUNT_SUMMARY),
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
    call(FOLLOWER),
    applyValue(publicKey),
    axios.get
  )(API_URL);
  return data.result
}
const postContent = async (publicKey: string, content: string, privateKey: string) => {
  const { data } = await pipe(
    endpoint(COMMIT),
    call(CREATE),
    applyValue(publicKey),
    applyValue('post'),
    axios.get
  )(API_URL);
  const rawContent = {
    type: 1,
    text: content
  }
  const tx = {
    ...data.transaction,
    memo: Buffer.alloc(0),
    params: {
      keys: [],
      content: contentEncode(rawContent)
    },
    signature: Buffer.alloc(64, 0)
  }
  sign(tx, privateKey);
  await axios.post(
    pipe(endpoint(COMMIT),call(RPC_COMMIT))(API_URL),
    {
      transaction: encode(tx).toString('base64')
    }
  )
}
const updateUsername = async (publicKey: string, username: string, privateKey: string) => {
  const { data } = await pipe(
    endpoint(COMMIT),
    call(CREATE),
    applyValue(publicKey),
    applyValue('update_account'),
    axios.get
  )(API_URL);
  const tx = {
    ...data.transaction,
    memo: Buffer.alloc(0),
    params: {
      key: 'name',
      value: Buffer.from(username)
    },
    signature: Buffer.alloc(64, 0)
  }
  sign(tx, privateKey);
  await axios.post(
    pipe(endpoint(COMMIT),call(RPC_COMMIT))(API_URL),
    {
      transaction: encode(tx).toString('base64')
    }
  )
}
const updateFollowing = async (publicKey: string, accounts: string[], privateKey: string) => {
  const { data } = await pipe(
    endpoint(COMMIT),
    call(CREATE),
    applyValue(publicKey),
    applyValue('update_account'),
    axios.get
  )(API_URL);
  console.log('aaa');
  const tx = {
    ...data.transaction,
    memo: Buffer.alloc(0),
    params: {
      key: 'followings',
      value: followingEncode(accounts)
    },
    signature: Buffer.alloc(64, 0)
  }
  sign(tx, privateKey);
  await axios.post(
    pipe(endpoint(COMMIT),call(RPC_COMMIT))(API_URL),
    {
      transaction: encode(tx).toString('base64')
    }
  )
}
const createAccount = async (account: string, publicKey: string, privateKey: string) => {
  const { data } = await pipe(
    endpoint(COMMIT),
    call(CREATE),
    applyValue(publicKey),
    applyValue('create_account'),
    axios.get
  )(API_URL);
  const tx = {
    ...data.transaction,
    memo: Buffer.alloc(0),
    params: {
      address: account
    },
    signature: Buffer.alloc(64, 0)
  };
  sign(tx, privateKey);
  await axios.post(
    pipe(endpoint(COMMIT),call(RPC_COMMIT))(API_URL),
    {
      transaction: encode(tx).toString('base64')
    }
  )
}
const paymentSubmit = async (account: string, amount: number, publicKey: string, privateKey: string) => {
  const { data } = await pipe(
    endpoint(COMMIT),
    call(CREATE),
    applyValue(publicKey),
    applyValue('payment'),
    axios.get
  )(API_URL);
  const tx = {
    ...data.transaction,
    memo: Buffer.alloc(0),
    params: {
      address: account,
      amount
    },
    signature: Buffer.alloc(64, 0)
  };
  sign(tx, privateKey);
  await axios.post(
    pipe(endpoint(COMMIT),call(RPC_COMMIT))(API_URL),
    {
      transaction: encode(tx).toString('base64')
    }
  )
}
const getPosts = async (publicKey: string) => {
  const { data } = await pipe(
    endpoint(DATABASE),
    call(POSTS),
    applyValue(publicKey),
    axios.get
  )(API_URL);
  const { result } = data;
  const posts = result.map(post => {
    return {
      ...post,
      content: contentDecode(Buffer.from(post.content))
    }
  })
  return posts.filter(post => !!post.content);
}
const getFollowing = async (publicKey: string) => {
  const { data } = await pipe(
    endpoint(DATABASE),
    call(FOLLOWING),
    applyValue(publicKey),
    axios.get
  )(API_URL)
  return data.result;
}
const updateImage = async (buffer: Uint8Array, publicKey: string, privateKey: string) => {
  const { data } = await pipe(
    endpoint(COMMIT),
    call(CREATE),
    applyValue(publicKey),
    applyValue('update_account'),
    axios.get
  )(API_URL);
  const tx = {
    ...data.transaction,
    memo: Buffer.alloc(0),
    params: {
      key: 'picture',
      value: buffer
    },
    signature: Buffer.alloc(64, 0)
  };
  sign(tx, privateKey);
  await axios.post('http:
    transaction: encode(tx).toString('base64')
  });
}
const getAllUsers = async () => {
  const { data } = await pipe(
    endpoint(DATABASE),
    call(ALL_USERS),
    axios.get
  )(API_URL);
  return data.result;
}
const updateReact = async (react: any, publicKey: string, privateKey: string) => {
  const { data } = await pipe(
    endpoint(COMMIT),
    call(CREATE),
    applyValue(publicKey),
    applyValue('interact'),
    axios.get
  )(API_URL);
  const tx = {
    ...data.transaction,
    memo: Buffer.alloc(0),
    params: {
      object: react.object,
      content: contentEncode(react.content)
    },
    signature: Buffer.alloc(64, 0)
  }
  sign(tx, privateKey);
  await axios.post('http:
    transaction: encode(tx).toString('base64')
  });
}
const getNewFeeds = async (publicKey: string) => {
  const { data } = await pipe(
    endpoint(DATABASE),
    call(NEW_FEEDS),
    applyValue(publicKey),
    axios.get
  )(API_URL);
  const { result } = data;
  const feeds = result.map(feed => {
    return {
      ...feed,
      content: contentDecode(Buffer.from(feed.content))
    }
  })
  return feeds.filter(feed => !!feed.content);
}
const getPayments = async (publicKey: string) => {
  const { data } = await pipe(
    endpoint(DATABASE),
    call(PAYMENTS),
    applyValue(publicKey),
    axios.get
  )(API_URL);
  const { result } = data;
  return result;
}
export { 
  test,
  getAccountSummary,
  getUserInfos,
  getFollower,
  postContent,
  updateUsername,
  updateFollowing,
  getPosts,
  getFollowing,
  updateImage,
  getAllUsers,
  updateReact,
  getNewFeeds,
  getPayments,
  createAccount,
  paymentSubmit
}
