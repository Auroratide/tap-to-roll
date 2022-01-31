import { render, screen, fireEvent } from '@testing-library/react'
import { DiceTapper } from '.'
import {
    predictableRandom,
    d4, d6, d8, d10, d12, d20,
} from '../testing/predictable-random.spec'

describe('DiceTapper', () => {
    test('rolling each type of die', async () => {
        const random = predictableRandom(d4(3), d6(5), d8(7), d10(9), d12(11), d20(19))
        render(<DiceTapper random={random} />)

        fireEvent.click(screen.getByText('d4'))
        expect(screen.getByLabelText('Rolls')).toHaveTextContent('3')

        fireEvent.click(screen.getByText('d6'))
        expect(screen.getByLabelText('Rolls')).toHaveTextContent('5')

        fireEvent.click(screen.getByText('d8'))
        expect(screen.getByLabelText('Rolls')).toHaveTextContent('7')

        fireEvent.click(screen.getByText('d10'))
        expect(screen.getByLabelText('Rolls')).toHaveTextContent('9')

        fireEvent.click(screen.getByText('d12'))
        expect(screen.getByLabelText('Rolls')).toHaveTextContent('11')

        fireEvent.click(screen.getByText('d20'))
        expect(screen.getByLabelText('Rolls')).toHaveTextContent('19')
    })

    test('accumulating a sum', async () => {
        const random = predictableRandom(d6(3), d6(5), d6(4))
        render(<DiceTapper random={random} />)

        fireEvent.click(screen.getByText('d6'))
        expect(screen.getByLabelText('Sum')).toHaveTextContent('3')

        fireEvent.click(screen.getByText('d6'))
        expect(screen.getByLabelText('Sum')).toHaveTextContent('8')

        fireEvent.click(screen.getByText('d6'))
        expect(screen.getByLabelText('Sum')).toHaveTextContent('12')
    })
})
