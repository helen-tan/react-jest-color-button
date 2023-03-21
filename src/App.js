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
        style={{ backgroundColor: buttonColor }}
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
      />
    </div>
  );
}

export default App;
