import { render, screen, fireEvent } from '@testing-library/react'
import { DiceTapper } from '.'
import { predictableRandom, d6 } from '../testing/predictable-random.spec'

describe('DiceTapper', () => {
    test('rolling a d6', async () => {
        const random = predictableRandom(d6(1), d6(2))
        render(<DiceTapper random={random} />)

        fireEvent.click(screen.getByText('Roll d6'))
        expect(screen.queryByText('1')).toBeInTheDocument()

        fireEvent.click(screen.getByText('Roll d6'))
        expect(screen.queryByText('2')).toBeInTheDocument()
    })
})
