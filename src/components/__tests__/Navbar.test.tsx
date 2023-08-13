import '@testing-library/jest-dom'
import {Navbar} from "../Navbar"
import {render, screen} from "@testing-library/react"
import {MemoryRouter} from "react-router-dom";
describe('Тестирование компонента Navbar', () => {
    test('Корректное значение', () => {
        render(
            <MemoryRouter>
                <Navbar/>
            </MemoryRouter>
        )
        const twitIconEl = screen.getByTestId('navbar-twiticon-link')
        const homeIconEl = screen.getByTestId('navbar-homeicon-link')
        const msgIconEl = screen.getByTestId('navbar-msgicon-link')
        const profileIconEl = screen.getByTestId('navbar-profileicon-link')
        expect(twitIconEl).toBeInTheDocument()
        expect(homeIconEl).toBeInTheDocument()
        expect(msgIconEl).toBeInTheDocument()
        expect(profileIconEl).toBeInTheDocument()
    })
})