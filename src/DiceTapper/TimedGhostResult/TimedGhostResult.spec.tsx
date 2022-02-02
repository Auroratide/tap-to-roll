import { render, screen, act } from '@testing-library/react'
import { TimedGhostResult } from '.'

const milliseconds = (seconds: number) => seconds / 1000
const waitForMilliseconds = (ms: number) => new Promise<void>(resolve => setTimeout(resolve, ms))

describe('TimedGhostResult', () => {
    const getProgressBar = () => screen.getByRole('progressbar') as HTMLProgressElement

    test('progress fills over time', async () => {
        render(<TimedGhostResult start={new Date()} seconds={milliseconds(100)} />)

        expect(getProgressBar()).toHaveValue(0)
        expect(getProgressBar().max).toEqual(100)
        
        await act(() => waitForMilliseconds(50))
        expect(getProgressBar().value).toBeGreaterThan(0)
        expect(getProgressBar().value).toBeLessThan(100)

        await act(() => waitForMilliseconds(100))
        expect(getProgressBar()).toHaveValue(100)
    })
})