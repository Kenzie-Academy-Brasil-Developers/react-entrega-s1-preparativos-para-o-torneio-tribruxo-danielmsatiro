import { useState } from "react";
import "./App.css";
import { Game } from "./components/Game";
import { Start } from "./components/Start";

function App() {
  const [isVisible, setIsVisible] = useState(true);
  

  return (
    <div className="App">
      {isVisible && <Start setIsVisible={setIsVisible} />}
      {!isVisible && <Game />}
    </div>
  );
}

export default App;
