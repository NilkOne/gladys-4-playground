const services = require('../../services');

// only here for the demo, should be stored in DB
const SERVICE_TO_LOAD = ['example'];

function load() {
  SERVICE_TO_LOAD.forEach((service) => {
    services[service]().start();
  });
}

module.exports = {
  load,
};