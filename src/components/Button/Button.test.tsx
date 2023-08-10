import renderer from 'react-test-renderer'
import { Button } from '.'

it('renders with common classes', () => {
  const component = renderer.create(<Button label="some label" />)
  const element = component.root.findByType('a')
  expect(element.props.className.includes('leading-7')).toBe(true)
  expect(element.props.className.includes('font-sans')).toBe(true)
  expect(element.props.className.includes('animate-gradient')).toBe(true)
  expect(
    element.props.className.includes('background-gradient-oversized')
  ).toBe(true)
})

it('renders with a passed label', () => {
  const component = renderer.create(<Button label="some label" />)
  expect(
    JSON.stringify(component.toJSON()).indexOf('some label')
  ).toBeGreaterThan(-1)
})

it('renders with passed className prop', () => {
  const component = renderer.create(
    <Button label="some label" className="foo bar" />
  )
  const element = component.root.findByType('a')
  expect(element.props.className.includes('foo bar')).toBe(true)
})

it('renders with passed style prop', () => {
  const component = renderer.create(
    <Button label="some label" style={{ foo: 'bar', baz: 'boo' }} />
  )
  const element = component.root.findByType('a')
  expect(element.props.style.foo).toBe('bar')
  expect(element.props.style.baz).toBe('boo')
})
