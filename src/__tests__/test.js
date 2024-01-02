// const { calculateTotal } = require('../src/calculate')
import { calculateTotal } from '../calculate.js'
test('basic test', () => {
    let result = 2;
    expect(result).toBe(2)
});

test('calculate sum', () => {
    const list = [
        {
            id:456,
            name: "god of war",
            count: 3,
            price: 400
        },
        {
            id:456,
            name: "god of peace",
            count: 1,
            price: 1300
        },

    ]
    const result = calculateTotal(list)
    expect(result).toBe(2500);
});

test('calculate sum discount', () => {
    const list = [
        {
            id:456,
            name: "god of war",
            count: 3,
            price: 401
        },
        {
            id:456,
            name: "god of peace",
            count: 1,
            price: 1300
        },

    ]
    const result = calculateTotal(list, true)
    expect(result).toBeCloseTo(1877.25);
});