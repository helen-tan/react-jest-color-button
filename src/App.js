import { useState } from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red')
  const [checkboxDisabled, setCheckboxDisabled] = useState(false)
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red'

  return (
    <div>
      {/* Color Button */}
      <button
        style={{ backgroundColor: checkboxDisabled ? 'gray' : buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={checkboxDisabled}
      >
        Change to {newButtonColor}
      </button>

      {/* Checkbox */}
      <input
        type="checkbox"
        onChange={e => setCheckboxDisabled(e.target.checked)}
        defaultChecked={checkboxDisabled}
        id="disable-button-checkbox"
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
