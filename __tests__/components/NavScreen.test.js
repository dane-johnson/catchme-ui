import React from 'react'
import renderer from 'react-test-renderer'
import NavScreen from '../../src/components/NavScreen'

jest.mock("react-leaflet")

const mockPosition = {
  coords: {
    latitude: 6.9,
    longitude: 9.6,
  }
}

describe('<NavScreen />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <NavScreen position={mockPosition} />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
