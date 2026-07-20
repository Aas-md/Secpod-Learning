import { useState } from "react";
import { useScore } from "../scoreStore";

export default function ScoreForm() {
  const score = useScore((state) => state.score);
  const addScore = useScore((state) => state.addScore);
  const [input, setInput] = useState<number>(0);
  const handleAddScore = () => {
    if (input <= 0 || input > 36) {
      alert("Score can not be less than 0 or greater than 36");
      return;
    }
    addScore(input);
    setInput(0);
  };

  return (
    <>
      <div className="m-2">
        <input
          type="number"
          placeholder={`Enter runs of ${score.length + 1} over`}
          value={input ? input : ""}
          onChange={(e) => setInput(Number(e.target.value))}
          className="border rounded-xl p-1 border-gray-300 focus:outline-sky-400"
        />
        <button
          onClick={handleAddScore}
          className="ml-2 bg-violet-500 text-white border rounded-2xl px-4 py-1 hover:cursor-pointer hover:scale-110 animation duration-300"
        >
          Add Score
        </button>
      </div>
    </>
  );
}
