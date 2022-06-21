import { fireEvent, render, screen } from '@testing-library/react';
import ContactForm from '../ContactForm';

beforeEach(() => {
 render(<ContactForm />)
})

it('renders a Add Contact button', () => {
 expect(screen.getByText('Add Contact')).toBeInTheDocument();
})

afterEach(() => {
 jest.restoreAllMocks()
})

it('renders a Name form field', () => {
 render(<ContactForm />)
 expect(screen.getByRole('textbox', { name: "Name Name" })).toBeInTheDocument()
})

it('renders a Email form field', () => {
 render(<ContactForm />)
 expect(screen.getByRole('textbox', { name: "Email Email" })).toBeInTheDocument()
})

it('renders a Phone form field', () => {
 render(<ContactForm />)
 expect(screen.getByRole('textbox', { name: "Phone Phone" })).toBeInTheDocument()
})

it('verifies form value is updated when typing', () => {
 const input = screen.getByRole('textbox', { name: "Name" })
 fireEvent.change(input, { target: { value: 'John' } })
 expect(input.value).toBe('John')
})

afterEach(() => {
 jest.restoreAllMocks()
})

it('verifies callback function invoked when button clicked', () => {
 window.alert = jest.fn()
 render(<ContactForm />)
 const button = screen.getByRole('button', { name: "Add Contact" })
 fireEvent.click(button)
 expect(window.alert).toHaveBeenCalledTimes(1)
})

