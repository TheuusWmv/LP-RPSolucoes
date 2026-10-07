import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const require = createRequire(import.meta.url);
const sharp = require(path.join(rootDir, 'landing-page/node_modules/sharp'));

// Carrega o favicon oficial da RP Soluções Inteligentes
const sourceFaviconPath = path.join(rootDir, 'downloaded-assets', 'favicon-rp.png');
if (!fs.existsSync(sourceFaviconPath)) {
  console.error(`Favicon fonte não encontrado em: ${sourceFaviconPath}`);
  process.exit(1);
}
const sourceFavicon = fs.readFileSync(sourceFaviconPath);

function makeIco(png32Buffer) {
  // ICONDIR header (6 bytes)
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // ICO type
  header.writeUInt16LE(1, 4); // 1 image

  // ICONDIRENTRY (16 bytes)
  const entry = Buffer.alloc(16);
  entry.writeUInt8(32, 0); // width
  entry.writeUInt8(32, 1); // height
  entry.writeUInt8(0, 2); // color count
  entry.writeUInt8(0, 3); // reserved
  entry.writeUInt16LE(1, 4); // color planes
  entry.writeUInt16LE(32, 6); // bits per pixel
  entry.writeUInt32LE(png32Buffer.length, 8); // size
  entry.writeUInt32LE(22, 12); // offset (6 + 16 = 22)

  return Buffer.concat([header, entry, png32Buffer]);
}

async function generate() {
  console.log('Gerando favicons em múltiplas resoluções a partir de favicon-rp.png...');

  const [png16, png32, png192, appleTouch] = await Promise.all([
    sharp(sourceFavicon).resize(16, 16).png().toBuffer(),
    sharp(sourceFavicon).resize(32, 32).png().toBuffer(),
    sharp(sourceFavicon).resize(192, 192).png().toBuffer(),
    sharp(sourceFavicon).resize(180, 180).png().toBuffer(),
  ]);

  const icoBuffer = makeIco(png32);

  // SVG de compatibilidade com o ícone embutido
  const base64Png = sourceFavicon.toString('base64');
  const faviconSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" width="192" height="192">
  <image href="data:image/png;base64,${base64Png}" width="192" height="192" />
</svg>`;

  const targets = [
    path.join(rootDir, 'landing-page/public'),
    path.join(rootDir, 'formulario/public'),
    path.join(rootDir, 'formulario/public/simulador'),
  ];

  for (const dir of targets) {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    fs.writeFileSync(path.join(dir, 'favicon.svg'), faviconSvg);
    fs.writeFileSync(path.join(dir, 'favicon.ico'), icoBuffer);
    fs.writeFileSync(path.join(dir, 'favicon-16x16.png'), png16);
    fs.writeFileSync(path.join(dir, 'favicon-32x32.png'), png32);
    fs.writeFileSync(path.join(dir, 'favicon-192x192.png'), png192);
    fs.writeFileSync(path.join(dir, 'apple-touch-icon.png'), appleTouch);
    console.log(`Favicons salvos com sucesso em: ${dir}`);
  }

  // Também salvar em dist caso já exista a build
  const distTargets = [
    path.join(rootDir, 'dist'),
    path.join(rootDir, 'dist/simulador'),
  ];

  for (const dir of distTargets) {
    if (fs.existsSync(dir)) {
      fs.writeFileSync(path.join(dir, 'favicon.svg'), faviconSvg);
      fs.writeFileSync(path.join(dir, 'favicon.ico'), icoBuffer);
      fs.writeFileSync(path.join(dir, 'favicon-16x16.png'), png16);
      fs.writeFileSync(path.join(dir, 'favicon-32x32.png'), png32);
      fs.writeFileSync(path.join(dir, 'favicon-192x192.png'), png192);
      fs.writeFileSync(path.join(dir, 'apple-touch-icon.png'), appleTouch);
      console.log(`Favicons salvos em dist: ${dir}`);
    }
  }

  console.log('Geração de favicons da RP Soluções concluída com sucesso!');
}

generate().catch(err => {
  console.error('Falha ao gerar favicons:', err);
  process.exit(1);
});
