import '@testing-library/jest-dom'
import {EmptyTweetList} from "../EmptyTweetList";
import {render, screen} from "@testing-library/react";

describe('Тестирование компонента EmptyTweetList', () => {
    test('Наличие элемента и стилей', () => {
        render(<EmptyTweetList/>)
        const mainEl = screen.getByText(/здесь будут ваши твиты/i)
        expect(mainEl).toBeInTheDocument()
        expect(mainEl).toHaveClass('message_title')
    })
})