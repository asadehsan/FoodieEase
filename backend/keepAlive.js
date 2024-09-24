const axios = require('axios');

const url = process.env.BACKEND_URL || 'http://localhost:5000';
const interval = 30 * 60 * 1000; // 30 minutes

function keepAlive() {
  axios.get(`${url}/keepalive`)
    .then(response => {
      console.log(`Keep-alive ping at ${new Date().toISOString()}: Status Code ${response.status}`);
    })
    .catch(error => {
      console.error(`Error pinging server at ${new Date().toISOString()}:`, error.message);
    });
}

function startKeepAlive() {
  setInterval(keepAlive, interval);
}

module.exports = startKeepAlive;