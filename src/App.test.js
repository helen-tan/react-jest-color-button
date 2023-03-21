import { render, screen, fireEvent } from '@testing-library/react';
import { logRoles } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// Functional Testing - can have multiple assertions (expect)
// 1. Initial - bg red, text "Change to blue"
// 2. After clicking - bg to become blue, text to be "Change to red"

test('button has correct initial color, and updates when clicked', () => {
  // If you want to know the roles in <App/> destructure it into a container and run logRoles on it
  // const { container } = render(<App/>) 
  // logRoles(container)

  // 1. Render component (in virtual DOM)
  render(<App/>) 
  // 2. Find element we want - role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })
  // 3. Assertion: Expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' })

  // Click button
  fireEvent.click(colorButton)
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' })
  expect(colorButton).toHaveTextContent("Change to red")
});


