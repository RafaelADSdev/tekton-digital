import sharp from "sharp";
import { rm } from "node:fs/promises";

const palette = {
  nox: [0x14, 0x14, 0x14],
  amethyst: [0x7e, 0x49, 0xb3],
  steel: [0xcf, 0xcf, 0xcf],
};

const logoPath = "public/assets/brand/tekton-logo.png";
const iconPath = "src/app/icon.png";

const distance = (pixel, color) =>
  (pixel[0] - color[0]) ** 2 +
  (pixel[1] - color[1]) ** 2 +
  (pixel[2] - color[2]) ** 2;

const recolorPixel = (data, offset, color) => {
  data[offset] = color[0];
  data[offset + 1] = color[1];
  data[offset + 2] = color[2];
};

const { data: logo, info: logoInfo } = await sharp(logoPath)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

for (let offset = 0; offset < logo.length; offset += 4) {
  if (logo[offset + 3] === 0) continue;

  const pixel = [logo[offset], logo[offset + 1], logo[offset + 2]];
  const isAmethyst =
    distance(pixel, [0x7d, 0x44, 0xff]) < distance(pixel, [0xfe, 0xfe, 0xff]) ||
    distance(pixel, palette.amethyst) < distance(pixel, palette.steel);

  recolorPixel(logo, offset, isAmethyst ? palette.amethyst : palette.steel);
}

await sharp(logo, { raw: logoInfo }).png({ compressionLevel: 9 }).toFile(`${logoPath}.tmp`);

const { data: icon, info: iconInfo } = await sharp(iconPath)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

// The favicon uses the same 205 x 191 symbol as the wordmark, offset by 24 x 32 px.
const markOffsetX = 24;
const markOffsetY = 32;

for (let y = 0; y < iconInfo.height; y += 1) {
  for (let x = 0; x < iconInfo.width; x += 1) {
    const offset = (y * iconInfo.width + x) * 4;
    if (icon[offset + 3] === 0) continue;

    const luminance = 0.2126 * icon[offset] + 0.7152 * icon[offset + 1] + 0.0722 * icon[offset + 2];
    let color = luminance > 160 ? palette.steel : palette.nox;

    const logoX = x - markOffsetX;
    const logoY = y - markOffsetY;

    if (logoX >= 0 && logoX < 210 && logoY >= 0 && logoY < logoInfo.height) {
      const logoOffset = (logoY * logoInfo.width + logoX) * 4;
      const logoPixel = [logo[logoOffset], logo[logoOffset + 1], logo[logoOffset + 2]];
      const isVisibleAmethyst =
        logo[logoOffset + 3] > 24 && distance(logoPixel, palette.amethyst) < distance(logoPixel, palette.steel);

      if (isVisibleAmethyst) color = palette.amethyst;
    }

    recolorPixel(icon, offset, color);
  }
}

await sharp(icon, { raw: iconInfo }).png({ compressionLevel: 9 }).toFile(`${iconPath}.tmp`);

await Promise.all([
  sharp(`${logoPath}.tmp`).toFile(logoPath),
  sharp(`${iconPath}.tmp`).toFile(iconPath),
]);

await Promise.all([rm(`${logoPath}.tmp`), rm(`${iconPath}.tmp`)]);

console.log("Brand assets normalized to #141414, #7E49B3 and #CFCFCF.");
