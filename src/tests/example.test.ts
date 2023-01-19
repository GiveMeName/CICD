import { addNum } from "../testFunc";

test('addNum1', () => {
    const result = addNum(1, 2);
    expect(result).toBe(3);
});

test('addNum2', () => {
    const result = addNum(1, 5);
    expect(result).toBe(6);
});