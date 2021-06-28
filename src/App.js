import { React, useEffect, useState } from "react";
import State from "./Components/State";

import Country from "./Components/Country";
import "./App.css";

function App() {
  const [btn, setBtn] = useState(false);
  const statetocountry = () => {
    setBtn(!btn);
  };
  return (
    <div>
      <div className="btn">
        <p>Click Here to get the data World or State </p>
        {!btn && <button onClick={statetocountry}>Contry</button>}
        {btn && <button onClick={statetocountry}>State</button>}
      </div>
      {!btn && <State />}
      {btn && <Country />}
    </div>
  );
}

export default App;
