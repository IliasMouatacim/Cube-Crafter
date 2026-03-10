import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, 'public');

if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);

https.get('https://commons.wikimedia.org/w/api.php?action=query&titles=File:Kevin_MacLeod_-_Wallpaper.ogg&prop=imageinfo&iiprop=url&format=json', { headers: { 'User-Agent': 'NodeBot/1.0' } }, res => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        try {
            const json = JSON.parse(data);
            const pages = json.query.pages;
            const pageId = Object.keys(pages)[0];
            const url = pages[pageId].imageinfo[0].url;
            console.log('Fetching from:', url);

            const file = fs.createWriteStream(path.join(publicDir, 'bgm.ogg'));

            https.get(url, { headers: { 'User-Agent': 'NodeBot/1.0' } }, response => {
                response.pipe(file);
                file.on('finish', () => {
                    file.close();
                    console.log('Download complete');
                });
            }).on('error', err => {
                console.error('Download error:', err.message);
            });
        } catch (e) {
            console.error('Error parsing JSON:', e.message);
            console.error('Raw data:', data);
        }
    });
});
