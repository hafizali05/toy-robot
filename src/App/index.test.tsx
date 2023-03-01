import { findByAltText, fireEvent, render, screen, within } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import userEvent from '@testing-library/user-event'

import App from '.';
import { ACTIONS } from '../hooks/useCommands';
describe("Board", () => {
    it("should render the board", () => {
        render(<App />)
        screen.getByTestId('board');
    })

    it('should place the robot in row 1 and col 1 of the board', async () => {
        render(<App />)
        const select = screen.getByRole('combobox');
        await fireEvent.change(select, { target: { value: ACTIONS.PLACE_ROBOT } });
        const row = await screen.findByPlaceholderText('row')
        const col = await screen.findByPlaceholderText('col')

        fireEvent.change(row, { target: { value: 1 } })
        fireEvent.change(col, { target: { value: 1 } })

        fireEvent.click(screen.getByRole('button', { name: 'Run' }))

        const rowOneColOneBox = within(screen.getByLabelText('row 1 and column 1'))
        rowOneColOneBox.getByAltText('robot')
    })
})