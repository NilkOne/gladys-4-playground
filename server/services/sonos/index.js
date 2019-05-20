// const logger = require('../../utils/logger');
const SonosMusicHandler = require('./lib/music');

module.exports = function SonosService(gladys) {
  // here is Sonos module
  const sonosApi = require('sonos');

  /**
   * @public
   * @description This function starts the SonosService service
   * @example
   * gladys.services.sonos.start();
   */
  async function start() {
    // logger.log('starting sonos service');
    console.log('starting sonos service');
  }

  /**
   * @public
   * @description This function stops the SonosService service
   * @example
   * gladys.services.sonos.stop();
   */
  async function stop() {
    // logger.log('stopping sonos service');
    console.log('stopping sonos service');
  }

  return Object.freeze({
    start,
    stop,
    music: new SonosMusicHandler(gladys, sonosApi),
  });
};
