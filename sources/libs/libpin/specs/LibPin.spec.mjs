import mocha from 'mocha';
import chai from 'chai';
import {
  createPin,
} from '../LibPin.mjs';

const {
  describe,
  it,
} = mocha;
const {
  expect,
} = chai;

describe('LibPin', () => {
  it('should generate a pin', async () => {
    const pinExpectedLength = 6;
    const pin = await createPin(pinExpectedLength);

    expect(pin.length).to.equal(pinExpectedLength);
  });
});
