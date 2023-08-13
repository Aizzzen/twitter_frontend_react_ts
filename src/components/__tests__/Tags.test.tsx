import '@testing-library/jest-dom'
import {Tags} from "../Tags"
import {render, screen} from "@testing-library/react"
import {MemoryRouter} from "react-router-dom";

describe('Тестирование компонента Tags', () => {
    test('Наличие элементов, текста и стилей', () => {
        render(
            <MemoryRouter>
                <Tags />
            </MemoryRouter>
        )
        const text = screen.getByText(/актуальные темы/i)
        const link = screen.getByRole('link')
        const paper = screen.getByTestId('tags-paper-container')
        expect(text).toBeInTheDocument()
        expect(link).toBeInTheDocument()
        expect(paper).toBeInTheDocument()
        expect(paper).toHaveClass(
            'MuiPaper-root makeStyles-rightSideBlock-25 MuiPaper-elevation1 MuiPaper-rounded'
        )
    })
})