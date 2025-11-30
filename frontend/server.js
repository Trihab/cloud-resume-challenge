// server.js (Version ES Modules)
import http from 'node:http';

let globalCount = 42; 

const server = http.createServer((req, res) => {
    // 1. Headers CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Content-Type', 'application/json');

    // 2. Preflight
    if (req.method === 'OPTIONS') {
        res.statusCode = 204;
        res.end();
        return;
    }

    // 3. GET
    if (req.method === 'GET') {
        res.end(JSON.stringify({ count: globalCount }));
        console.log(`GET reçu. Count : ${globalCount}`);
    } 
    
    // 4. POST
    else if (req.method === 'POST') {
        globalCount++;
        res.end(JSON.stringify({ count: globalCount }));
        console.log(`POST reçu. Nouveau count : ${globalCount}`);
    } 
    
    else {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: "Route not found" }));
    }
});

server.listen(8080, () => {
    console.log('🚀 Serveur de test lancé sur http://localhost:8080');
});