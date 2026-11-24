import { mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outputDir, { recursive: true });

const entryText = 'A sock that files a formal complaint when it goes missing, naming the dryer as the suspect and demanding a full investigation.';
writeFileSync(join(outputDir, 'entry.txt'), entryText);

// Revised after local test