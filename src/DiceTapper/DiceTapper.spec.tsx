import { render, screen, act } from '@testing-library/react'
import { DiceTapper } from '.'
import type { UserEvent } from '@testing-library/user-event/dist/types/setup'
import userEvent from '@testing-library/user-event'
import {
    predictableRandom,
    d4, d6, d8, d10, d12, d20,
} from '../testing/predictable-random.spec'

const milliseconds = (seconds: number) => seconds / 1000
const waitForMilliseconds = (ms: number) => new Promise<void>(resolve => setTimeout(resolve, ms))

describe('DiceTapper', () => {
    let user: UserEvent

    beforeEach(() => {
        user = userEvent.setup()
    })

    test('rolling each type of die', async () => {
        const random = predictableRandom(d4(3), d6(5), d8(7), d10(9), d12(11), d20(19))
        render(<DiceTapper random={random} />)

        await user.click(screen.getByText('d4'))
        expect(screen.getByLabelText('Rolls')).toHaveTextContent('3')

        await user.click(screen.getByText('d6'))
        expect(screen.getByLabelText('Rolls')).toHaveTextContent('5')

        await user.click(screen.getByText('d8'))
        expect(screen.getByLabelText('Rolls')).toHaveTextContent('7')

        await user.click(screen.getByText('d10'))
        expect(screen.getByLabelText('Rolls')).toHaveTextContent('9')

        await user.click(screen.getByText('d12'))
        expect(screen.getByLabelText('Rolls')).toHaveTextContent('11')

        await user.click(screen.getByText('d20'))
        expect(screen.getByLabelText('Rolls')).toHaveTextContent('19')
    })

    test('accumulating a sum', async () => {
        const random = predictableRandom(d6(3), d6(5), d6(4))
        render(<DiceTapper random={random} />)

        await user.click(screen.getByText('d6'))
        expect(screen.getByLabelText('Sum')).toHaveTextContent('3')

        await user.click(screen.getByText('d6'))
        expect(screen.getByLabelText('Sum')).toHaveTextContent('8')

        await user.click(screen.getByText('d6'))
        expect(screen.getByLabelText('Sum')).toHaveTextContent('12')
    })

    test('identifying the max and min', async () => {
        const random = predictableRandom(d20(8), d20(3), d20(16))
        render(<DiceTapper random={random} />)

        expect(screen.getByLabelText('Max')).toBeEmptyDOMElement()
        expect(screen.getByLabelText('Min')).toBeEmptyDOMElement()

        await user.click(screen.getByText('d20'))
        expect(screen.getByLabelText('Max')).toHaveTextContent('8')
        expect(screen.getByLabelText('Min')).toHaveTextContent('8')

        await user.click(screen.getByText('d20'))
        expect(screen.getByLabelText('Max')).toHaveTextContent('8')
        expect(screen.getByLabelText('Min')).toHaveTextContent('3')

        await user.click(screen.getByText('d20'))
        expect(screen.getByLabelText('Max')).toHaveTextContent('16')
        expect(screen.getByLabelText('Min')).toHaveTextContent('3')
    })

    test('reset rolls after a period of no input', async () => {
        const random = predictableRandom(d8(3), d8(1), d8(8), d8(2))
        render(<DiceTapper secondsUntilNewRollSeries={milliseconds(50)} random={random} />)

        await user.click(screen.getByText('d8'))
        expect(screen.getByLabelText('Rolls')).toHaveTextContent(/^3$/)

        await user.click(screen.getByText('d8'))
        expect(screen.getByLabelText('Rolls')).toHaveTextContent(/^31$/)
        expect(screen.getByLabelText('Sum')).toHaveTextContent('4')

        await act(() => waitForMilliseconds(50))

        // After the time period, a new series begins
        await user.click(screen.getByText('d8'))
        expect(screen.getByLabelText('Rolls')).toHaveTextContent(/^8$/)

        await user.click(screen.getByText('d8'))
        expect(screen.getByLabelText('Rolls')).toHaveTextContent(/^82$/)
        expect(screen.getByLabelText('Sum')).toHaveTextContent('10')
    })
})
