import { useGame } from "../context/GameContext";
import Hole from "./Hole";

export default function GameBoard() {
  const { score, restartGame } = useGame();

  return (
    <div className="game-board">
      <h2>Score: {score}</h2>
      <button onClick={restartGame}>Restart</button>
      <div className="grid">
        {Array.from({ length: 9 }).map((_, index) => (
          <Hole key={index} index={index} />
        ))}
      </div>
    </div>
  );
}