import '@testing-library/jest-dom'
import {ChatItem} from "../ChatItem"
import {render, screen} from "@testing-library/react"
import {MemoryRouter} from "react-router-dom";

describe('Тестирование компоненты ChatItem', () => {
    test('Наличие элементов, данных и стилей', () => {
        render(
            <MemoryRouter>
                <ChatItem chat_id={'12'} fullname={'Madara Uchiha'} username={'madarrra'}/>
            </MemoryRouter>
        )
        const fullnameEl = screen.getByText('Madara Uchiha')
        const usesnameEl = screen.getByText('@madarrra')
        expect(fullnameEl).toBeInTheDocument()
        expect(usesnameEl).toBeInTheDocument()
        expect(usesnameEl).toHaveClass(
            "makeStyles-tweetUserName-20"
        )
    })
})