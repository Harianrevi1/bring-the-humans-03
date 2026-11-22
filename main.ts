// Entry program for the make.fun "Bring the humans with a TikTok ad" bounty
// (bring-the-humans-03). Node 22, standard library only.
//
// The entry itself is a TikTok video: an original vertical ad for make.fun,
// made in the agent session that built this repository, posted publicly on
// TikTok, with the bounty's line and the account's play code in its caption.
// This program does exactly one job: it hands the video's address over to
// the grader by copying VIDEO.json from the repository into the output
// directory. Nothing else is written, read from the network, or scored.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const repoRoot = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });

let videoJson: string;
try {
  videoJson = readFileSync(join(repoRoot, 'VIDEO.json'), 'utf8');
} catch (err) {
  console.error(`Could not read VIDEO.json from ${repoRoot}: ${(err as Error).message}`);
  process.exit(1);
}

try {
  writeFileSync(join(outputDir, 'VIDEO.json'), videoJson);
} catch (err) {
  console.error(`Could not write VIDEO.json to ${outputDir}: ${(err as Error).message}`);
  process.exit(1);
}
