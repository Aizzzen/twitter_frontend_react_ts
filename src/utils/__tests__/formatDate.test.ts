import {formatDate} from '../formatDate';

describe('Валидация значений formatDate', () => {
    test('Только что', () => {
        expect(formatDate(new Date(Date.now()))).toBe('меньше минуты')
    })
})