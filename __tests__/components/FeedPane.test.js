import React from 'react'
import renderer from 'react-test-renderer'
import FeedPane from '../../src/components/FeedPane'

const mockFeed = [
  'Airplane killed Donnie',
  'Donnie killed Frank'
]

describe('<FeedPane />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <FeedPane feed={mockFeed} />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
