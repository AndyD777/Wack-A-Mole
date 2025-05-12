import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export function useGame() {
  return useContext(GameContext);
}

export function GameProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [moleIndex, setMoleIndex] = useState(() => Math.floor(Math.random() * 9));

  const startGame = () => {
    setIsPlaying(true);
    setScore(0);
    setMoleIndex(Math.floor(Math.random() * 9));
  };

  const restartGame = () => {
    setIsPlaying(false);
  };

  const whackMole = () => {
    setScore((prev) => prev + 1);
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * 9);
    } while (newIndex === moleIndex); // Ensure different index
    setMoleIndex(newIndex);
  };

  return (
    <GameContext.Provider value={{ isPlaying, startGame, restartGame, score, moleIndex, whackMole }}>
      {children}
    </GameContext.Provider>
  );
}