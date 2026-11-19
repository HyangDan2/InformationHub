#!/usr/bin/env node
/**
 * HD2Lab InformationHub — one-command build.
 *
 *   1. runs Eleventy inside ./src  (source)  ->  ./src/_site
 *   2. copies that output over this repository's root, which is what GitHub
 *      Pages serves at https://hyangdan2.github.io/InformationHub/
 *
 * The published pages therefore keep the same URLs the source declares
 * (/InformationHub/, /InformationHub/china-ai/, /InformationHub/posts/…,
 * /InformationHub/assets/…, /InformationHub/search.json): the repo root *is*
 * the /InformationHub/ folder.
 *
 * Usage:  node build.mjs          (or: npm run build from the repo root)
 */
import { spawnSync } from "node:child_process";
import { cp, mkdir, readdir, rm, stat, writeFile, readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const srcDir = join(root, "src");
const outDir = join(srcDir, "_site");

/** Everything in the repo root that is generated and may be replaced. */
const GENERATED = ["index.html", "china-ai", "posts", "assets", "search.json", "og-image.png", "favicon.ico"];

function run(command, args, cwd) {
  const result = spawnSync(command, args, { cwd, stdio: "inherit", shell: process.platform === "win32" });
  if (result.status !== 0) {
    console.error(`\n✖ ${command} ${args.join(" ")} failed (exit ${result.status ?? result.signal})`);
    process.exit(result.status ?? 1);
  }
}

/** Same as run(), but reports the exit code instead of exiting. */
function tryRun(command, args, cwd) {
  const result = spawnSync(command, args, { cwd, stdio: "inherit", shell: process.platform === "win32" });
  return result.status === 0;
}

async function exists(path) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

if (!(await exists(join(srcDir, "node_modules")))) {
  console.log("• src/node_modules is missing — installing dependencies…");
  // npm ci is exact, but it refuses a lockfile that pins an optional package for
  // another OS (fsevents is darwin-only). Fall back to a plain install that leaves
  // the committed lockfile untouched.
  if (!tryRun("npm", ["ci", "--no-audit", "--no-fund"], srcDir)) {
    console.log("• npm ci could not run here — falling back to npm install…");
    run("npm", ["install", "--no-package-lock", "--no-audit", "--no-fund"], srcDir);
  }
}

/* Eleventy leaves output from earlier builds in _site, which would then be copied
   to the root as stale pages. Start from an empty output directory. */
await rm(outDir, { recursive: true, force: true });

console.log("• building src with Eleventy…");
run("npm", ["run", "build"], srcDir);

if (!(await exists(join(outDir, "index.html")))) {
  console.error(`✖ build produced no index.html in ${outDir}`);
  process.exit(1);
}

console.log("• cleaning previously published output…");
for (const entry of GENERATED) {
  await rm(join(root, entry), { recursive: true, force: true });
}

console.log("• publishing _site/ into the repository root…");
await mkdir(root, { recursive: true });
for (const entry of await readdir(outDir)) {
  await cp(join(outDir, entry), join(root, entry), { recursive: true });
}

/* GitHub Pages must not run Jekyll over the generated HTML. */
await writeFile(join(root, ".nojekyll"), "");

/* The output is generated, so src/_site is never committed. */
const gitignore = await readFile(join(root, ".gitignore"), "utf8").catch(() => "");
if (!gitignore.includes("src/_site/")) {
  console.error("✖ .gitignore is missing src/_site/ — refusing to leave generated output untracked");
  process.exit(1);
}

const posts = (await readdir(join(root, "posts"), { withFileTypes: true })).filter((d) => d.isDirectory()).length;
console.log(`\n✔ done — ${posts} reports published at the repo root`);
console.log("  https://hyangdan2.github.io/InformationHub/");
