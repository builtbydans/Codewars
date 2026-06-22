export function rps(p1: string, p2: string): string {
  if (p1 === p2) return "Draw!";

  const rules: Record<string, string> = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  return rules[p1] === p2 ? "Player 1 won!" : "Player 2 won!";
}

console.log(rps("scissors", "paper"));
console.log(rps("scissors", "rock"));
console.log(rps("scissors", "scissors"));
