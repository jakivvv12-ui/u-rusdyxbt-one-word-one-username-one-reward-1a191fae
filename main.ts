// One Word, One Username, One Reward — entry for make.fun
// Writes Zaki's own make.fun username, one word, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const USERNAME = "jakivvv12-ui";

// Gate: the entry must be UTF-8 text of 1–30 characters, not only whitespace.
if (
  USERNAME.length < 1 ||
  USERNAME.length > 30 ||
  USERNAME.trim().length === 0 ||
  /\s/.test(USERNAME)
) {
  throw new Error("invalid username: must be one word of 1-30 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, USERNAME, "utf8");
