const play = require('./music.play');
const pause = require('./music.pause');

/**
 * @description Add ability to control a light
 * @param {Object} gladys - Gladys instance.
 * @param {Object} sonosApi - Third-part sonos API object.
 * @example
 * const sonosMusicHandler = new SonosMusicHandler(gladys, sonosApi);
 */
const SonosMusicHandler = function SonosMusicHandler(gladys, sonosApi) {
    this.gladys = gladys;
    this.sonosApi = sonosApi;  
};

SonosMusicHandler.prototype.play = play;
SonosMusicHandler.prototype.pause = pause;

module.exports = SonosMusicHandler;
