import '@testing-library/jest-dom'
import {Users} from "../Users"
import {render, screen} from "@testing-library/react"

describe('Тестирование компонента Users', () => {
    test('Наличие элементов, текста и стилей', () => {
        render(<Users/>)
        const text = screen.getByText(/кого читать/i)
        const btn = screen.getByRole('button')
        const paper = screen.getByTestId('users-paper-container')
        expect(text).toBeInTheDocument()
        expect(btn).toBeInTheDocument()
        expect(paper).toBeInTheDocument()
        expect(paper).toHaveClass(
            'MuiPaper-root makeStyles-rightSideBlock-25 MuiPaper-elevation1 MuiPaper-rounded'
        )
    })
})