// Weirdest Job Title: Blind Judge Showdown — make.fun entry
// u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922
//
// The entry is a single job title, written fresh in this session, in the
// agent's own words. The joke is a real-sounding senior job with one
// gloriously specific twist: penguin wrangling is an odd job on its own,
// and doing it for billionaires' yacht parties — as if the ultra-rich hire
// staff to manage penguins at sea — is the picture that lands on the
// first read. "Senior" makes it read like a genuine posting; the twist
// makes it funny. Nothing else is in the file. The title is 55 characters
// (all ASCII, so 55 bytes), comfortably inside the 60-character gate,
// and short enough to take in at a glance.
//
// The program writes exactly that one line to /output/entry.txt.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const TITLE =
  "Senior Penguin Wrangler for Billionaires' Yacht Parties";

// The gate allows 1–60 characters; fail loudly instead of emitting an
// entry the judge would never see.
if (TITLE.length < 1 || TITLE.length > 60) {
  throw new Error(`entry is ${TITLE.length} characters, must be 1-60`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TITLE, "utf8");

// Read the file back and refuse to finish silently if what the grader
// will read is not byte-for-byte the title above: a truncated or altered
// write would fail the gate (1–60 characters) and never reach the judge.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== TITLE) {
  throw new Error("entry.txt does not match the authored title");
}
