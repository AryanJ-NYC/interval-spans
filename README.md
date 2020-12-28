# Interval Spans

[![npm](https://img.shields.io/npm/v/interval-spans?style=plastic)](https://www.npmjs.com/package/interval-spans)

For when you need to create [interval spans](<https://en.wikipedia.org/wiki/Interval_(mathematics)>) and no other library will do.

Easily create interval spans, look up to which interval span a number belongs to (if any) and attach metadata to your interval spans.

<!--ts-->
   * [Interval Spans](#interval-spans)
      * [Installation](#installation)
      * [Usage](#usage)
         * [Interval Span](#interval-span)
            * [Constructor](#constructor)
               * [API](#api)
               * [Example](#example)
            * [Includes](#includes)
               * [API](#api-1)
               * [Example](#example-1)
         * [Interval Spans](#interval-spans-1)
            * [Constructor](#constructor-1)
               * [API](#api-2)
               * [Example](#example-2)
            * [Get Span by Number](#get-span-by-number)
               * [API](#api-3)
               * [Example](#example-3)
      * [License](#license)

<!-- Added by: runner, at: Mon Dec 28 02:29:31 UTC 2020 -->

<!--te-->

## Installation

```bash
yarn add interval-spans
npm install interval-spans
```

## Usage

### Interval Span

Creates an interval span from `start` (inclusive) to `end` (exclusive) and attach

#### Constructor

##### API

```typescript
new IntervalSpan(start: number, end: number, metadata?: Record<string, any>);
```

##### Example

```typescript
import { IntervalSpan } from 'interval-span';

const singleDigitIntegerSpan = new IntervalSpan(0, 10, {
  name: 'single-digits',
});
```

#### Includes

##### API

```typescript
instance.includes(numberToTest: number): boolean;
```

##### Example

```typescript
const intervalSpan = new IntervalSpan(0, 10);
intervalSpan.includes(0); // true
intervalSpan.includes(10); // false
```

### Interval Spans

#### Constructor

##### API

```typescript
new IntervalSpans(intervalSpans: IntervalSpan[]);
```

##### Example

```typescript
import { IntervalSpans } from 'interval-spans';

const intervalSpans = new IntervalSpans([new IntervalSpan(0, 10), new IntervalSpan(10, 20)]);
```

#### Get Span by Number

Finds the span which includes a number.

##### API

```typescript
instance.getSpanByNumber(numberToTest: number): IntervalSpan | null;
```

##### Example

```typescript
const intervalSpans = new IntervalSpans([
  new IntervalSpan(0, 10, { name: 'single-digits' }),
  new IntervalSpan(10, 20, { name: 'ten-to-twenty' }),
]);
intervalSpans.getSpanByNumber(0); // { start: 0, end: 10, metadata: { name: 'single-digits' }}
intervalSpans.getSpanByNumber(10); // { start: 10, end: 20, metadata: { name: 'ten-to-twenty' }}
intervalSpans.getSpanByNumber(20); // undefined;
```

## License

MIT
