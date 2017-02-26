import React from 'react'
import renderer from 'react-test-renderer'
import Lobby from '../../src/components/Lobby'

const mockPlayers = [
  "Dane",
  "Cole"
]

const mockLeader = true

describe("<Lobby />", () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Lobby players={mockPlayers} leader={mockLeader}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  })
})
