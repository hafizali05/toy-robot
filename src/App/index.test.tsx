import { render, screen } from '@testing-library/react';
import { it, describe } from 'vitest';
import App from '.';
describe("Board", () => {
    it("should render the board", () => {
        render(<App />)
        screen.getByTestId('board');
    })
})