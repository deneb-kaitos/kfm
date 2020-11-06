import _sodium from 'libsodium-wrappers';

const initLibSodium = async () => {
  await _sodium.ready;

  return Object.freeze(_sodium);
};

export const createPin = async (length = 8) => {
  await initLibSodium();

  return Object.freeze(Buffer.from(_sodium.randombytes_buf(Math.floor(length / 2))).toString('hex'));
};
