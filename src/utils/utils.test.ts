import { describe, it, expect } from 'vitest';
import { double, isEven } from './utils';

describe('utils', () => {
    it('should double the input value', () => {
        expect(double(2)).toBe(4);
        expect(double(-3)).toBe(-6);
    });

    it('should check if input value is even', () => {
        expect(isEven(2)).toBe(true);
        expect(isEven(3)).toBe(false);
    });
});