import { formatTime } from './time'

describe('>>> UTILS --- Test time util', () => {
  test('+++ format return correct value', () => {
    expect(formatTime('59')).toEqual("0:59");
    expect(formatTime('60')).toEqual("1:00");
    expect(formatTime('61')).toEqual("1:01");
    expect(formatTime(null)).toEqual("0:00");
  });
});
