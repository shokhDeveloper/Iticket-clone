import {render, screen} from "@testing-library/react"
import { ShoppingBtn } from "./ShoppingBtn"
test("ShoppingCart Test => ", () => {
    render(<ShoppingBtn/>)
    let id = screen.getByTestId("shopping")
    const span = screen.getByTestId("shopping-count")
    expect(id).toBeInTheDocument()
    expect(span).toBeInTheDocument()
})