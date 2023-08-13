import '@testing-library/jest-dom'
import Message from "../chat-message/Message"
import {render, screen} from "@testing-library/react"
import {formatDate} from "../../../utils/formatDate";

describe('Тестирование компонента Message', () => {
    test('Наличие текста и стилей', () => {
        render(<Message id={'1'} stamp={formatDate(new Date())} msg={'test message'}/>)
        const text = screen.getByText('test message')
        expect(text).toBeInTheDocument()
        expect(text).toHaveClass('text')
    })
})