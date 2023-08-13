import {textWithLinks} from '../textWithLinks';

describe('Валидация значений textWithLinks', () => {
    test('Получить ссылку', () => {
        expect(textWithLinks('проект развернут на https://localhost:3000')).toBe('проект развернут на <a href="https://localhost:3000">https://localhost:3000</a>')
    })
    test('Получить строку', () => {
        expect(textWithLinks('проект развернут на локальной машине')).toBe('проект развернут на локальной машине')
    })
    test('Получить пустую строку', () => {
        expect(textWithLinks('')).toBe('')
    })
})
