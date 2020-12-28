export class IntervalSpan<Metadata = Record<string, any>> {
  constructor(readonly start: number, readonly end: number, readonly metadata?: Metadata) {}

  includes(numberToTest: number) {
    return numberToTest >= this.start && numberToTest < this.end;
  }
}

export class IntervalSpans<Metadata = Record<string, any>> {
  constructor(readonly intervalSpans: IntervalSpan<Metadata>[]) {}

  getSpanByNumber(numberToTest: number) {
    return this.intervalSpans.find(intervalSpan => intervalSpan.includes(numberToTest));
  }
}
