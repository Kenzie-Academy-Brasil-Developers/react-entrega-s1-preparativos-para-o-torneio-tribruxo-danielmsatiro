import { useState } from "react";
import "./reset.css";
import "./App.css";
import { Game } from "./components/Game";
import { Start } from "./components/Start";

function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="App">
      <div className="bg-fundo">
        {isVisible && <Start setIsVisible={setIsVisible} />}
        {!isVisible && <Game />}
      </div>
    </div>
  );
}

export default App;
