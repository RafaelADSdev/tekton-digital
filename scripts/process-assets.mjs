import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const workspace = process.cwd();
const sourceRoot = path.resolve(workspace, "..", "Projetos", "xdd", "public", "assets");
const caseOutput = path.join(workspace, "public", "assets", "cases");
const teamOutput = path.join(workspace, "public", "assets", "team");

await Promise.all([mkdir(caseOutput, { recursive: true }), mkdir(teamOutput, { recursive: true })]);

const jobs = [
  [path.join(sourceRoot, "cases", "nautica-after-desktop.jpg"), path.join(caseOutput, "nautica-after-desktop.webp")],
  [path.join(sourceRoot, "cases", "nautica-after-mobile.jpg"), path.join(caseOutput, "nautica-after-mobile.webp")],
  [path.join(sourceRoot, "rafael-arcanjo.webp"), path.join(teamOutput, "rafael-arcanjo.webp")],
  [path.join(sourceRoot, "kaio-seabra.jpg"), path.join(teamOutput, "kaio-seabra.webp")],
  [path.join(sourceRoot, "miguel-leite.jpg"), path.join(teamOutput, "miguel-leite.webp")],
];

for (const [source, destination] of jobs) {
  await sharp(source).rotate().webp({ quality: 84, effort: 5 }).toFile(destination);
  console.log(`${path.basename(source)} -> ${path.relative(workspace, destination)}`);
}
