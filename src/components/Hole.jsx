import { useGame } from "../context/GameContext";
import "../index.css"; // Uses .hole and .mole styles

export default function Hole({ index }) {
  const { moleIndex, whackMole } = useGame();
  const hasMole = index === moleIndex;

  return (
    <div
      className="hole"
      onClick={hasMole ? whackMole : null}
      style={{
        width: "100px",
        height: "100px",
        display: "inline-block",
        margin: "10px",
        position: "relative",
        cursor: hasMole ? "pointer" : "default",
      }}
    >
      {hasMole && (
        <div
          className="mole"
          style={{
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        ></div>
      )}
    </div>
  );
}