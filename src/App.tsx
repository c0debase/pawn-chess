import "./App.css";
import { ChessBoard } from "./components/ChessBoard/ChessBoard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="title">Pawn-Chess</div>
        <ChessBoard />
      </header>
    </div>
  );
}

export default App;
