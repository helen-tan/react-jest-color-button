# Color Button App
A dead simple app built for learning how to test code with **Jest** and practice Test-Driven Development (TDD) with React.  

## Aim
1. To create a button that toggles the background color of the color between the colors 'Medium Violet Red' and 'Midnight Blue'.
2. To create a checkbox that enables and disables the button, turning the button gray when disabled.

<p align="center">
  <img src="src/images/color-button-demo.gif"/>
</p>

## Testing
**Tests written (in App.test.js):**
1. Button has correct initial color, and updates when clicked 
2. Initial conditions 
3. Checkbox disables button on first click and enables on second click 
4. Disabled button has gray background and reverts to Medium Violet Red 
5. Disabled button has gray background and reverts to Midnight Blue 
6. Spaces before camel-case capital letters
    1. Works for no inner capital letters
    2. Works for one inner capital letter 
    3. Works for multiple inner capital letters


Upon running Jest with **npm test**: 
<p align="center">
  <img src="src/images/tests_pass.png" height="300"/>
</p>


