"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function GuessPhrase() {
  const target = "👋🌍";
  const [guess, setGuess] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const handleGuess = () => {
    if (guess === target) {
      setResult("Correct! 🎉");
    } else {
      setResult("Try again.");
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-6">
      <div className="text-4xl">{target}</div>
      <Input
        placeholder="Enter your guess"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        className="w-64"
      />
      <Button onClick={handleGuess}>Guess</Button>
      {result && <p className="text-center">{result}</p>}
    </div>
  );
}
