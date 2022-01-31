export type Die = (random: () => number) => number

export const die = (sides: number) => (random: () => number) =>
    Math.floor(random() * sides + 1)
