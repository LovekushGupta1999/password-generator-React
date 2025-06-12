import { useState, useEffect, useCallback,useRef} from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(14);
  const [password, setPassword] = useState('');
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);

  const passwordRef = useRef(null);

  const handleCopy = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 5); 
    window.navigator.clipboard.writeText(password)
      .then(() => {
        alert('Password copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy password: ', err);
      });
  },[password]);

  const generatePassword = useCallback(() => {
    let pass = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const numbers = '1234567890';
    const specialChars = '!@#$%^&*';

    if (includeNumbers) characters += numbers;
    if (includeSpecialChars) characters += specialChars;

    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * characters.length);
      pass += characters.charAt(index);
    }

    setPassword(pass);
  }, [length, includeNumbers, includeSpecialChars]);

  useEffect(() => {
    generatePassword();
  }, [length, includeNumbers, includeSpecialChars, generatePassword]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-black-500 bg-gray-400">
      <h1 className="text-white text-center my-3">Password Generator</h1>

      <div className="flex shadow rounded-lg bg-white-700 overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none  w-full py-1 px-3"
          placeholder="Password"
          ref={passwordRef}
          onFocus={() => passwordRef.current.select()}
          readOnly
        />
        <button 
        onClick={handleCopy}
        className="outline-none bg-gray-700 text-white px-3 py-0.5 shrink-0">
          Copy
        </button>
      </div>

      <div className="flex text-sm gap-x-4 items-center">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <label>Length: {length}</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers((prev) => !prev)}
            id="include-numbers"
          />
          <label htmlFor="include-numbers">Numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={includeSpecialChars}
            onChange={() => setIncludeSpecialChars((prev) => !prev)}
            id="include-special-chars"
          />
          <label htmlFor="include-special-chars">Special Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
