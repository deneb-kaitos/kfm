import mocha from 'mocha';
import chai from 'chai';
import {
  v4 as uuidv4,
} from 'uuid';
import {
  createPin,
} from '@deneb-kaitos/libpin';
import {
  createCompanyAccountToken,
} from '../createCompanyAccountToken.mjs';
import {
  TokenTypes,
} from '../constants.mjs';

const {
  describe,
  it,
} = mocha;
const {
  expect,
} = chai;

describe('LibToken', () => {
  it(`should generate a ${TokenTypes.CreateCompanyAccountToken} token`, async () => {
    const tokenConfig = Object.freeze({
      issued: {
        by: uuidv4(),
        on: Date.now(),
      },
      pin: (await createPin()),
    });
    const token = await createCompanyAccountToken(tokenConfig);

    expect(token).to.be.frozen;
    expect(token.type).to.equal(TokenTypes.CreateCompanyAccountToken);
    expect(token.payload).to.equal(tokenConfig);
  });
});
