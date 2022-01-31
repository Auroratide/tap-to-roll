/**
 * For creating a predictable sequence of random numbers, useful for testing
 * @param numbers Numbers in the range [0, 1]
 * @returns a function that generates "random" numbers
 */
export const predictableRandom = (...numbers: number[]): () => number => function() {
    if (this.i === undefined)
        this.i = -1
    return numbers[++this.i]
}.bind({})

export const die = (sides: number) => (outcome: number) => (outcome - 1) / sides
export const d4 = die(4)
export const d6 = die(6)
export const d8 = die(8)
export const d10 = die(10)
export const d12 = die(12)
export const d20 = die(20)
export const d100 = die(100)

// I do believe in testing non-trivial test utilities
describe('predictable random', () => {
    test('outputs the given sequence exactly', () => {
        const random = predictableRandom(0.5, 0.75)

        expect(random()).toEqual(0.5)
        expect(random()).toEqual(0.75)

        // When we run out, results are undefined
        expect(random()).toBeUndefined()
    })

    test('die breakpoints', () => {
        const random = predictableRandom(die(4)(2), die(6)(4), die(8)(1))

        expect(random()).toEqual(0.25)
        expect(random()).toEqual(0.5)
        expect(random()).toEqual(0)
    })
})