import { D2 } from './D2'
import { D4 } from './D4'
import { D6 } from './D6'
import { D8 } from './D8'
import { D10 } from './D10'
import { D12 } from './D12'
import { D20 } from './D20'
import { D100 } from './D100'

export * from './D2'
export * from './D4'
export * from './D6'
export * from './D8'
export * from './D10'
export * from './D12'
export * from './D20'
export * from './D100'

export const dieForSides = {
    2: D2,
    4: D4,
    6: D6,
    8: D8,
    10: D10,
    12: D12,
    20: D20,
    100: D100,
}
