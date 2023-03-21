import { render, screen, fireEvent } from '@testing-library/react';
import { logRoles } from '@testing-library/react';
import App from './App';
import { replaceCamelWithSpaces } from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// Functional Testing - can have multiple assertions (expect)
// 1. Initial - bg red, text "Change to blue"
// 2. After clicking - bg to become blue, text to be "Change to red"

test('Button has correct initial color, and updates when clicked', () => {
  // If you want to know the roles in <App/> destructure it into a container and run logRoles on it
  // const { container } = render(<App/>) 
  // logRoles(container)

  // 1. Render component (in virtual DOM)
  render(<App />)
  // 2. Find element we want - role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' })
  // 3. Assertion: Expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' })

  // Click button
  fireEvent.click(colorButton)
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' })
  expect(colorButton).toHaveTextContent("Change to Medium Violet Red")
});

test('Initial conditions', () => {
  render(<App />)

  // Button to start out enabled
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' })
  expect(colorButton).toBeEnabled

  // Checkbox to start unchecked
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' }) // This name option will find the checkbox by the label element
  expect(checkbox).not.toBeChecked()
})

test('Checkbox disables button on first click and enables on second click', () => {
  render(<App />)

  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' })
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' })

  // Click checkbox (checkbox checked) > Expect button to be disabled
  fireEvent.click(checkbox)
  expect(colorButton).toBeDisabled()

  // Click Checkbox (uncheck checkbox) > Expect button to be enabled again
  fireEvent.click(checkbox)
  expect(colorButton).toBeEnabled()
})

test('Disabled button has gray background and reverts to Medium Violet Red', () => {
  render(<App />)

  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' })
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' })

  // disable button > button is gray > re-enable button > button is red
  fireEvent.click(checkbox)
  expect(colorButton).toBeDisabled()
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' })

  fireEvent.click(checkbox)
  expect(colorButton).toBeEnabled()
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' })
})

test('Disabled button has gray background and reverts to Midnight Blue', () => {
  render(<App />)

  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' })
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' })

  // click button to change color to blue > disable button > button is gray
  fireEvent.click(colorButton)
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' })
  fireEvent.click(checkbox)
  expect(colorButton).toBeDisabled()
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' })

  // re-enable button > button is blue
  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' })
})

// Describe statement is a way of grouping tests
describe('Spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red')
  })

  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue')
  })

  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red')
  })
})
