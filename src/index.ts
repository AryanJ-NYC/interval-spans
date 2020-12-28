export class IntervalSpan {
  constructor(
    readonly start: number,
    readonly end: number,
    readonly metadata?: Record<string, any>
  ) {}

  includes(numberToTest: number) {
    return numberToTest >= this.start && numberToTest < this.end;
  }
}

export class IntervalSpans {
  constructor(readonly intervalSpans: IntervalSpan[]) {}

  getSpanByNumber(numberToTest: number) {
    return this.intervalSpans.find(intervalSpan => intervalSpan.includes(numberToTest));
  }
}
