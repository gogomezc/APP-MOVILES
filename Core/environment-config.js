const fs = require('fs');
const dotenv = require('dotenv');

// Carga el archivo .env
const env = dotenv.config().parsed;

const envConfig = {
    production: process.env.NODE_ENV === 'production',
    ...env,
};

fs.writeFileSync('./src/assets/config/env.json', JSON.stringify(envConfig, null, 2));
