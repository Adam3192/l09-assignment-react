import { fireEvent, render, screen } from '@testing-library/react'
import ContactForm from '../ContactForm'

afterEach(() => {
  jest.restoreAllMocks()
})

it('renders a Add Contact button', () => {
  render(<ContactForm />)
  expect(screen.getByText('Add Contact')).toBeInTheDocument()
})

it('renders a Name form field', () => {
  render(<ContactForm />)
  expect(screen.getByRole('textbox', { name: 'Name' })).toBeInTheDocument()
})

it('renders a Email form field', () => {
  render(<ContactForm />)
  expect(screen.getByRole('textbox', { name: 'Email' })).toBeInTheDocument()
})

it('renders a Phone form field', () => {
  render(<ContactForm />)
  expect(screen.getByRole('textbox', { name: 'Phone' })).toBeInTheDocument()
})

it('verifies form value is updated when typing', () => {
  render(<ContactForm />)
  const input = screen.getByRole('textbox', { name: 'Name' })
  fireEvent.change(input, { target: { value: 'John' } })
  expect(input.value).toBe('John')
})

it('verifies callback function invoked when button clicked', () => {
  let onContactAdded = jest.fn()
  render(<ContactForm onContactAdded={onContactAdded} />)
  const button = screen.getByRole('button', { name: 'Add Contact' })
  fireEvent.click(button)
  expect(onContactAdded).toHaveBeenCalledTimes(1)
})

it('renders without error', () => {
  render(<ContactForm />)
})

it('should match the snapshot', () => {
  const { asFragment } = render(<ContactForm />)
  const html = asFragment()
  expect(html).toMatchSnapshot()
})

