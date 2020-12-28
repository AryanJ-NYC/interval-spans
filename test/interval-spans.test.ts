import { IntervalSpan, IntervalSpans } from '../src';

describe('IntervalSpan', () => {
  test('includes', () => {
    const intervalSpan = new IntervalSpan(0, 10);
    expect(intervalSpan.includes(0)).toBe(true);
    expect(intervalSpan.includes(10)).toBe(false);
  });
});

describe('IntervalSpans', () => {
  test('getSpanByNumber', () => {
    const intervalSpans = new IntervalSpans([
      new IntervalSpan(0, 10, { name: 'single-digits' }),
      new IntervalSpan(10, 20, { name: 'ten-to-twenty' }),
    ]);

    expect(intervalSpans.getSpanByNumber(0)).toEqual({
      start: 0,
      end: 10,
      metadata: { name: 'single-digits' },
    });
    expect(intervalSpans.getSpanByNumber(10)).toEqual({
      start: 10,
      end: 20,
      metadata: { name: 'ten-to-twenty' },
    });
    expect(intervalSpans.getSpanByNumber(20)).toBe(undefined);
  });
});
