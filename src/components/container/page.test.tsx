import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Page from './page'

describe('Container', () => {

    it('renders a heading', () => {
        render(<Page><h1>Test</h1></Page>)

        expect(screen.getByRole('heading', {level: 1})).toBeInTheDocument();
    })

})