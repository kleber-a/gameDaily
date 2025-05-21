import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import GameCard from './page';

const mockData = {
  id: 123,
  title: 'Super Game',
  description: 'Um jogo muito divertido',
  image_url: '/super-game.jpg',
  platforms: ['PC', 'Xbox', 'PS5'],
  categories: ['test'],
  release: ''
};

const mockDataNull = {
  id: 123,
  title: 'Super Game',
  description: 'Um jogo muito divertido',
  image_url: '',
  platforms: ['PC', 'Xbox', 'PS5'],
  categories: ['test'],
  release: ''
};

describe('GameCard component', () => {
  it('deve renderizar o título do jogo', () => {
    render(<GameCard data={mockData} />);
    expect(screen.getByRole('heading', { name: /super game/i })).toBeInTheDocument();
  });

  it('deve renderizar a imagem com alt correto', () => {
    render(<GameCard data={mockData} />);
    const image = screen.getByAltText(/super game/i);
    expect(image).toBeInTheDocument();

    expect(image.getAttribute('src')).toContain('super-game.jpg');
  });

  it('deve renderizar todas as plataformas', () => {
    render(<GameCard data={mockData} />);
    mockData.platforms.forEach(platform => {
      expect(screen.getByText(platform)).toBeInTheDocument();
    });
  });

  it('deve conter link para a página correta do jogo', () => {
    render(<GameCard data={mockData} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', `/game/${mockData.id}`);
  });

  it('deve conter o link da tag image', () => {
    render(<GameCard data={mockDataNull} />)

   const image = screen.getByAltText(/super game/i) as HTMLImageElement;
    expect(image).toBeInTheDocument();

    expect(image.getAttribute('src')).toContain('/placeholder.svg');
  })

});
