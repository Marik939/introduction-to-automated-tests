import { add, divide } from '../src/calculator.js';

describe('add', ()=> {
it('adds two positive numbers', () => {
expect(add(2, 3)).toBe(5);
});

it('adds negative numbers', () => {
expect(add(-2, -3)).toBe(-5);
});

it('throws when inputs are not numbers', () => {
expect(()=> add ('2', 3)).toThrow('add expects two numbers');
   });
});

describe('divide',()=> {
    expect(divide(6,2)).toBe(3);
});
// Negative tests
it('throws when inputs are not numbers', () => {
expect(() => divide('6', 2)).toThrow(TypeError);
});
   
it('throws when inputs are NaN', () => {
expect(() => divide(NaN, 2)).toThrow(TypeError);
expect(() => divide(2, NaN)).toThrow(TypeError);
});

it('throws when dividing by zero', () => {
expect(() => divide(10, 0)).toThrow(RangeError);
});

it('throws when both arguments are invalid', () => {
expect(() => divide('a', 'b')).toThrow(TypeError);
});
