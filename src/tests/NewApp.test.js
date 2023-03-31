import NewApp from "../components/NewApp";
import React from "react";
import {render, screen, act} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

describe('testing NewApp Act() render', () => {
  it('renders without act()', () => {
    jest.useFakeTimers()
    render(<NewApp />)
    expect(screen.getByRole('heading').textContent).toMatch('0')
    act(() =>jest.runAllTimers())
    expect(screen.getByRole('heading').textContent).toMatch('2')
  })
})