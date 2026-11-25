import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I bought a standing desk to fix my posture — now I slouch standing up, and my chiropractor calls it progress.";

// The gate allows 1-200 characters. Fail loudly instead of submitting a
// line the gate would reject. One concrete object (standing desk), one
// named authority (my chiropractor), twist on the last word.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry out of bounds: ${LINE.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
