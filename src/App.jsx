import { useGame, GameProvider } from "./context/GameContext";
import WelcomeScreen from "./components/WelcomeScreen";
import GameBoard from "./components/GameBoard";

function GameApp() {
  const { isPlaying } = useGame();

  return isPlaying ? <GameBoard /> : <WelcomeScreen />;
}

export default function App() {
  return (
    <GameProvider>
      <GameApp />
    </GameProvider>
  );
}