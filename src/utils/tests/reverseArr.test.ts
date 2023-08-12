import {reverse} from '../reverseArr';

describe('Валидация значений reverse', () => {
    test('Массив чисел', () => {
        expect(reverse([1,2,3])).toStrictEqual([3,2,1])
    })
    test('Массив строк', () => {
        expect(reverse(['hello', 'world', '!'])).toStrictEqual(['!', 'world', 'hello'])
    })
    test('Пустой массив', () => {
        expect(reverse([])).toStrictEqual([])
    })
})