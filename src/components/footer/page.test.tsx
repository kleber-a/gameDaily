import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Page from './page'

describe('Footer', () => {
    it('renderizar titulo', () => {
        render(<Page />)
        
        const heading = screen.getByRole('heading', { name: /game\s*daily/i})
        expect(heading).toBeInTheDocument();
    })
    
     it('contains the copyright text', () => {
    render(<Page />)

        const copyright = screen.getByText(/© 2024 GameDaily/i)
        expect(copyright).toBeInTheDocument()
    })

    it('has link to Perfil', () => {
        render(<Page />)

        const perfilLink = screen.getByRole('link', { name: /perfil/i })
        expect(perfilLink).toHaveAttribute('href', '/perfil')
    })

    it('has Sobre link', () => {
        render(<Page />)

        const sobreLink = screen.getByRole('link', { name: /sobre/i })
        expect(sobreLink).toBeInTheDocument()
    })

})