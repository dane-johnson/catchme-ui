import React from 'react'
import renderer from 'react-test-renderer'
import TargetPane from '../../src/components/TargetPane'

const mockTarget = {
  name: 'Frank'
}

describe('<TargetPane />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <TargetPane target={mockTarget} />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
