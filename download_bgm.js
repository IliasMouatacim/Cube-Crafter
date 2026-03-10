import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, 'public');

if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);

// Downloading a relaxing acoustic/lofi track provided by an open source repository
const url = 'https://raw.githubusercontent.com/mdn/webaudio-examples/main/audio-analyser/viper.mp3';
// An alternative is a completely ambient drone sound if the mdn one is too energetic:
const altUrl = 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3'

console.log('Fetching lofi track...');

const file = fs.createWriteStream(path.join(publicDir, 'bgm.mp3'));

https.get(altUrl, { headers: { 'User-Agent': 'NodeBot/1.0' } }, response => {
    // Follow redirect
    if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        https.get(response.headers.location, { headers: { 'User-Agent': 'NodeBot/1.0' } }, res2 => {
            res2.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log('Download complete');
            });
        });
    } else {
        response.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log('Download complete');
        });
    }
}).on('error', err => {
    console.error('Download error:', err.message);
});
