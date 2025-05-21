import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import GameDetails from './page'

const mock = {
    id: 123,
    title: 'Super Game',
    description: 'Um jogo muito divertido',
    image_url: '/super-game.jpg',
    platforms: ['PC', 'Xbox', 'PS5'],
    categories: ['test'],
    release: ''
}


describe('GameDetails', () => {

    it('renderizar componente', () => {
        render(<GameDetails game={mock} />)
        
        expect(screen.getByRole('heading', { name: /super game/i})).toBeInTheDocument()
    });

    it('deve conterl link na tag image, caso image_url seja vazio', () => {
        let mockNull = {...mock, image_url: ''}
        render(<GameDetails game={mockNull} />)

        const image = screen.getByAltText(/super game/i) as HTMLImageElement;
        expect(image).toBeInTheDocument();

        expect(image.getAttribute('src')).toContain('/placeholder.svg');
    })

})