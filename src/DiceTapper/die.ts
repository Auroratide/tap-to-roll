export type RollResult = {
    sides: number,
    value: number,
}

export type Die = (random: () => number) => RollResult

export const die = (sides: number) => (random: () => number): RollResult => ({
    sides,
    value: Math.floor(random() * sides + 1),
})
