import '@testing-library/jest-dom'
import {EmptyChatsList} from "../EmptyChatsList"
import {render, screen} from "@testing-library/react";

describe('Тестирование компонента EmptyChatsList', () => {
    test('Наличие элемента и стилей', () => {
        render(<EmptyChatsList/>)
        const mainEl = screen.getByText(/здесь будут ваши чаты/i)
        expect(mainEl).toBeInTheDocument()
        expect(mainEl).toHaveClass('message_title')
    })
})