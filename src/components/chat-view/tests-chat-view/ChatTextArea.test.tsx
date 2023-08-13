import '@testing-library/jest-dom'
import {ChatTextArea} from "../ChatTextArea"
import {render, screen, fireEvent} from "@testing-library/react"

describe('Тестирование компоненты ChatTextArea', () => {
    test('Наличие элемента, текста и стилей', () => {
        const sendMessage = () => null
        const setText = () => null
        render(<ChatTextArea sendMessage={sendMessage} setText={setText} text={'test message'}/>)
        const text = screen.getByText(/отправить сообщение/i)
        const btn = screen.getByRole('button')
        expect(text).toBeInTheDocument()
        expect(btn).toBeInTheDocument()
        expect(btn).toHaveClass('iconSize')
    })
    test('Событие клика (кнопка)', () => {
        const sendMessage = () => null
        const setText = () => null
        render(<ChatTextArea sendMessage={sendMessage} setText={setText} text={'test message'}/>)
        const textArea = screen.queryByTestId('main-textarea')
        const btn = screen.getByTestId('button-textarea')
        expect(textArea).toBeNull()
        fireEvent.click(btn)
    })
    test('Событие change (textarea)', () => {
        const sendMessage = () => null
        const setText = () => null
        render(<ChatTextArea sendMessage={sendMessage} setText={setText} text={'test message'}/>)
        const textarea = screen.getByPlaceholderText("Введите сообщение")
        fireEvent.change(textarea, {
            target: {value: 'Test value'}
        })
    })
})