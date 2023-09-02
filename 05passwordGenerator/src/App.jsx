import { useCallback, useEffect, useRef, useState } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copyButtonText, setCopyButtonText] = useState("Copy");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    setCopyButtonText("Copied!");
    setTimeout(() => {
      setCopyButtonText("Copy");
    }, 800);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="w-screen h-screen bg-slate-950 py-5">
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-2xl text-center text-white my-4">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            placeholder="Password"
            className="outline-none w-full py-1 px-3"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            {copyButtonText}
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              value={length}
              min={8}
              max={100}
              className="cursor-pointer"
              id="password__length"
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="password__length">Length: ({length})</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="number"
              defaultChecked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="number">Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="character"
              defaultChecked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="character">Character</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
