import { describe, it , expect } from 'vitest';
import { increment, decrement } from './counterLogic';

describe('counterLogic', () =>{
    it('should increment the count', () => {
        expect(increment(0)).toBe(1);
        expect(increment(1)).toBe(2);
    });

    it('should decrement the count', () => {
        expect(decrement(0)).toBe(-1);
        expect(decrement(-1)).toBe(-2);
    });
});