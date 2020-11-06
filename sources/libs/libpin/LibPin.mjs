import _sodium from 'libsodium-wrappers';

let sodium = null;

const checkSodiumIsReady = async () => {
  if (sodium === null) {
    await _sodium.ready;

    sodium = Object.freeze(_sodium);
  }
};

export const createPin = async (length = 8) => {
  await checkSodiumIsReady();

  return Buffer.from(sodium.randombytes_buf(Math.floor(length / 2))).toString('hex');
};
