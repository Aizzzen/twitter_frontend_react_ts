import '@testing-library/jest-dom'
import {CommentItem} from "../CommentItem"
import {fireEvent, render, screen} from "@testing-library/react"
import {Provider} from "react-redux";
import {createStore} from "redux";
import {rootReducer} from "../../store/rootReducer";

describe('Тестирование компонента CommentItem', function () {
    test('Наличие элементов, данных и стилей', () => {
        render(
            <Provider store={createStore(rootReducer)}>
                <CommentItem id={'1'} text={'test comment'} created_at={new Date(2023, 0, 1).toString()}/>
            </Provider>
        )
        const menuItem = screen.getByTestId('commentitem-menu-item')
        expect(menuItem).toBeInTheDocument()
        expect(menuItem).toHaveTextContent('Удалить комментарий')
        fireEvent.click(menuItem)
    })
});