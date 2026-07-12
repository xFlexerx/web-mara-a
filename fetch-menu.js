const https = require('https');
const fs = require('fs');

const options = {
    hostname: 'www.entraenmicarta.es',
    port: 443,
    path: '/local/75ozvrofs3?no_image=1',
    method: 'GET',
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
        'Accept-Language': 'es-ES,es;q=0.9',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1'
    }
};

const req = https.request(options, (res) => {
    let data = '';
    console.log('Status: ' + res.statusCode);
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
        fs.writeFileSync('menu.html', data);
        console.log('Downloaded length: ' + data.length);
    });
});

req.on('error', (e) => {
    console.error(e);
});

req.end();
