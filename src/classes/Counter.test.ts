import { describe, it, expect } from 'vitest';
import Counter from './Counter';

describe('Counter', () => {
  it('should initialize count to zero by default', () => {
    const counter = new Counter();
    expect(counter.getCount()).toBe(0);
  });

  it('should initialize count to the provided value', () => {
    const counter = new Counter(5);
    expect(counter.getCount()).toBe(5);
  });

  it('should increment the count', () => {
    const counter = new Counter();
    counter.increment();
    expect(counter.getCount()).toBe(1);
  });

  it('should decrement the count', () => {
    const counter = new Counter();
    counter.decrement();
    expect(counter.getCount()).toBe(-1);
  });
});
