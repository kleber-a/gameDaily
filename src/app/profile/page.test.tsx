import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Profile from './page';

describe('Profile component', () => {
    it("deve renderizar nome do usuário padrão", () => {
        render(<Profile />)
        expect(screen.getByText("Usuário")).toBeInTheDocument()
    })


it("deve adicionar um novo jogo", () => {
  render(<Profile />)

  const input = screen.getByPlaceholderText("Adicionar jogo aos favoritos...")
  const button = screen.getByText("Adicionar")

  fireEvent.change(input, { target: { value: "Minecraft" } })
  fireEvent.click(button)

  expect(screen.getByText("Minecraft")).toBeInTheDocument()
})

it('deve executar função removeGame', () => {
    render(<Profile />)

   // 1. Digita o nome do jogo no input
  const input = screen.getByPlaceholderText('Adicionar jogo aos favoritos...')
  fireEvent.change(input, { target: { value: 'God of War' } })

  // 2. Clica no botão "Adicionar"
  const addButton = screen.getByText(/adicionar/i)
  fireEvent.click(addButton)

  // 3. Verifica se o jogo foi adicionado
  expect(screen.getByText('God of War')).toBeInTheDocument()

  // 4. Clica no botão da lixeira
  const trashButtons = screen.getAllByRole('button')
  const trashButton = trashButtons.find((btn) =>
    btn.innerHTML.includes('svg') // ou outra lógica mais segura
  )
  fireEvent.click(trashButtons[2])


  expect(screen.queryByText('God of War')).not.toBeInTheDocument()
})

})