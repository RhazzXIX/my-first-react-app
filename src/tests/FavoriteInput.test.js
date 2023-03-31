import React from "react";
import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom"
import FavoriteInput from "../components/FavoriteInput";

describe("Favorite Input" , () => {
  test("calls onChange correct number of times", async () => {
    const user = userEvent.setup()
    const onChangeMock = jest.fn()
    render(<FavoriteInput onChange={onChangeMock} />)

    const input = screen.getByRole('textbox');

    await userEvent.type(input,"Lion");

    expect(onChangeMock).toHaveBeenCalledTimes(4)
  })

  it('calls onChange with correct argumet(s) on each input', async() => {
    const onChangeMock = jest.fn();
    render(<FavoriteInput onChange={onChangeMock} />);
    const input = screen.getByRole('textbox');

    await userEvent.type(input, "Ox");

    expect(onChangeMock).toHaveBeenNthCalledWith(1, "O");
    expect(onChangeMock).toHaveBeenNthCalledWith(2, 'Ox');
  })

  it('input has correct values', async () => {
    const onChangeMock = jest.fn();
    render(<FavoriteInput onChange={onChangeMock} />)
    const input = screen.getByRole('textbox');

    await userEvent.type(input, 'Whale');

    expect(input).toHaveValue("Whale")
  })
})