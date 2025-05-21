// @/app/game/[id]/page.test.tsx

import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';

// Mock global.fetch antes de importar as funções se elas usarem fetch
// global.fetch = jest.fn();

// Importe suas funções (ajuste o caminho se necessário)
import { generateMetadata, getData, getDailyGame } from '@/app/game/[id]/page'; // Assumindo que essas funções estão em page.tsx
import Game from './page'


describe('getData function', () => {
    const mockFetch = jest.fn();

    beforeEach(() => {
        global.fetch = mockFetch
        jest.spyOn(console, 'error').mockImplementation(() => {});
        console.warn('mockFetch',mockFetch)

    })

    afterEach(() => {
        jest.clearAllMocks();
          cleanup();

    });

    it('retorna dados quando fetch é bem-sucedido', async () => {
        const mockJson = {id: 123, name: 'Zelda'}
        mockFetch.mockReturnValue({
            json: jest.fn().mockReturnValue(mockJson)
        });

        const data = await getData('123');
        const data2 = await getDailyGame();

        expect(mockFetch).toHaveBeenCalledWith(
        `${process.env.NEXT_API_URL}/next-api/?api=game&id=123`,
        { next: { revalidate: 60 } }
        );
        expect(data).toEqual(mockJson);

         expect(mockFetch).toHaveBeenCalledWith(
        `${process.env.NEXT_API_URL}/next-api/?api=game_day`,
        {cache: "no-store"}
        );
        expect(data).toEqual(mockJson);
    });

    it('lança erro quando fetch falha', async () => {
        mockFetch.mockRejectedValue(new Error());

        await expect(getData('123')).rejects.toThrow('Failed to fetch data');
        expect(console.error).toHaveBeenCalled();
          
        await expect(getDailyGame()).rejects.toThrow('Failed to fetch data');
        expect(console.error).toHaveBeenCalled();
    });


        it('renderiza o conteúdo corretamente quando dados existem', async () => {
        const mockJson = {
            title: 'Super Mario',
            id: 123,
            name: 'Zelda',
            platforms: ['Nintendo', 'Switch'],
            categories: ['Nintendo', 'Switch'],
        };

        mockFetch.mockResolvedValue({
            json: () => Promise.resolve(mockJson),
        });

        // Chama o componente normalmente, ele vai usar fetch mockado
        const jsx = await Game({ params: Promise.resolve({ id: '123' }) });

        render(jsx);

        // Se sabe que tem mais de um "Super Mario" pode usar findAllByText
        const elements = await screen.findAllByText(/Super Mario/);
        expect(elements.length).toBeGreaterThan(0);

        // Ou teste o título mais especificamente
        // const title = await screen.findByRole('heading', { name: /Super Mario/ });
        // expect(title).toBeInTheDocument();
        });


   it('renderiza o conteúdo corretamente quando dados não existem', async () => {
        mockFetch.mockResolvedValue({
        json: () => Promise.resolve(null),
        });

        const jsx = await Game({ params: Promise.resolve({ id: '123' }) });

        render(jsx);

        expect(await screen.findByText(/Voltar para a página inicial/)).toBeInTheDocument();
  });
    
})