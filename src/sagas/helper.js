import { Keypair } from 'stellar-base';
const generateKey = (privateKey) => {
  const key = Keypair.fromSecret(privateKey);
  return key.publicKey();
}
export {
  generateKey
}
