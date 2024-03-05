import Header from "../src/components/Header";
import Player from "../src/components/Player";

function App() {
  return (
    <menu>
      <Header title="Tic-Tac-Toe" />
      <div id="game-container">
        <ol id="players">
          <Player name="Player 1" symbol="X" />
          <Player name="Player 2" symbol="O" />
        </ol>
        GAME BOARD
      </div>
      LOG
    </menu>
  );
}

export default App;
