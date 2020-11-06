import _sodium from 'libsodium-wrappers';
import {
  TokenTypes,
} from './constants.mjs';

const initLibSodium = async () => {
  await _sodium.ready;

  return Object.freeze(_sodium);
};

export const createCompanyAccountToken = async (tokenConfig) => {
  await initLibSodium();

  return Object.freeze({
    type: TokenTypes.CreateCompanyAccountToken,
    payload: tokenConfig,
  });
};
