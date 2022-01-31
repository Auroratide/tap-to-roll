import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { DiceTapper } from '.'
import {
    predictableRandom,
    d4, d6, d8, d10, d12, d20,
} from '../testing/predictable-random.spec'

const milliseconds = (seconds: number) => seconds / 1000
const waitForMilliseconds = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

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

    test('reset rolls after a period of no input', async () => {
        const random = predictableRandom(d8(3), d8(1), d8(8), d8(2))
        render(<DiceTapper secondsUntilNewRollSeries={milliseconds(50)} random={random} />)

        fireEvent.click(screen.getByText('d8'))
        expect(screen.getByLabelText('Rolls')).toHaveTextContent(/^3$/)

        fireEvent.click(screen.getByText('d8'))
        expect(screen.getByLabelText('Rolls')).toHaveTextContent(/^3 1$/)
        expect(screen.getByLabelText('Sum')).toHaveTextContent('4')

        await waitForMilliseconds(50)

        // After the time period, a new series begins
        fireEvent.click(screen.getByText('d8'))
        expect(screen.getByLabelText('Rolls')).toHaveTextContent(/^8$/)

        fireEvent.click(screen.getByText('d8'))
        expect(screen.getByLabelText('Rolls')).toHaveTextContent(/^8 2$/)
        expect(screen.getByLabelText('Sum')).toHaveTextContent('10')
    })
})
