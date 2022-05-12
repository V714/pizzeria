import Footer from '../Footer'
import ReactDOM from 'react-dom'
import { getQueriesForElement } from '@testing-library/jest-dom'

test("renders the correct footer", () => {
    const root = document.createElement("div");
    ReactDOM.render(<Footer/>,root)

    expect(getByText("Pizzeria")).not.toBeNull();
})