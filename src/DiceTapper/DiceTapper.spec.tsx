import { render, screen } from '@testing-library/react'
import { DiceTapper } from '.'

describe('DiceTapper', () => {


    test('rolling a d6', async () => {
        render(<DiceTapper />)

        expect(screen.queryByText('4')).toBeInTheDocument()
    })
})
