import React from 'react'
import { render } from '@testing-library/react'
import Post from "../components/Post"



test('should locate a post with the title of Testing', () => {
    const { getByText } = render(<Post title={"Testing"} text={"test"} />)

    expect(getByText("Testing")).toBeTruthy()
})