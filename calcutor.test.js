
const mathOperations = require('./calculator');
describe("Calculator tests", () => {
    test('adding 1 + 2 should return 3', () => {
    var result = mathOperations.sum(1,2)
    expect(result).toBe(3);
    expect(result).not.toBe(5);
    });

    test('diff 5 - 1 should return 4', () => {
    var result = mathOperations.diff(5,1)
    expect(result).toBe(4);
    });

    test('product 7 * 3 should return 21', () => {
    var result = mathOperations.product(7,3)
    expect(result).toBe(21);
    });

    
})

describe("Calculator tests", () => {

    beforeAll(() => {
    console.log("beforeAll called");
    });
    afterAll(() => {
    console.log("afterAll called");
    });
    beforeEach(() => {
    console.log("beforeEach called");
    });
    afterEach(() => {
    console.log("afterEach called");
    });
    test('adding 1 + 2 should return 3', () => {
    var result = mathOperations.sum()
    });
    })