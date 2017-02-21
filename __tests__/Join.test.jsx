import React from 'react'
import renderer from 'react-test-renderer'
import Join from '../src/components/Join.jsx'



describe("<Join />", () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Join />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  })
})
