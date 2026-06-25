const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const assetDir = path.join(projectRoot, 'asset');
const outputPath = path.join(projectRoot, 'js', 'personality-images.js');
const supportedExtensions = new Set(['.webp', '.png', '.jpg', '.jpeg', '.gif']);

function getMimeType(ext) {
    switch (ext) {
        case '.jpg':
        case '.jpeg':
            return 'image/jpeg';
        case '.png':
            return 'image/png';
        case '.gif':
            return 'image/gif';
        case '.webp':
            return 'image/webp';
        default:
            throw new Error(`Unsupported image extension: ${ext}`);
    }
}

function main() {
    if (!fs.existsSync(assetDir)) {
        throw new Error(`Asset directory not found: ${assetDir}`);
    }

    const files = fs.readdirSync(assetDir)
        .filter(file => supportedExtensions.has(path.extname(file).toLowerCase()))
        .sort((a, b) => a.localeCompare(b, 'en'));

    const lines = [];
    lines.push('// Auto-generated personality image data URLs.');
    lines.push('// Run `npm run generate:inline-images` after updating files in /asset.');
    lines.push('window.PERSONALITY_IMAGE_DATA = {');

    files.forEach(file => {
        const filePath = path.join(assetDir, file);
        const ext = path.extname(file).toLowerCase();
        const mimeType = getMimeType(ext);
        const base64 = fs.readFileSync(filePath).toString('base64');
        const key = `./asset/${file}`;
        lines.push(`    ${JSON.stringify(key)}: 'data:${mimeType};base64,${base64}',`);
    });

    lines.push('};');
    lines.push('');

    fs.writeFileSync(outputPath, lines.join('\n'), 'utf8');
    console.log(`Generated ${path.relative(projectRoot, outputPath)} with ${files.length} images.`);
}

main();
