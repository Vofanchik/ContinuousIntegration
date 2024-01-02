import calculateCashback from '../cashback'

test('cash at 500', () => {
    const result = calculateCashback(500);
    expect(result).toBe(0)
})

const dataList = [
    ['silver', 10000, 200],
    ['gold', 100000, 5000],
    ['no', 500, 0],

]


const handler = test.each(dataList)

handler('testing cashback %s and %i', (status, amount, expected) => {
    const result = calculateCashback(amount)
    expect(result).toBe(expected)
})