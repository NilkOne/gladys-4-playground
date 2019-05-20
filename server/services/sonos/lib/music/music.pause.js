
/**
 * @private
 * @description Pause the speaker.
 * @param {Object} deviceIp - The IP address of the speaker we wants to control.
 * @returns {Promise} Promise.
 * @example
 * pause(deviceIp);
 */
function pause(deviceIp) {
    const Sonos  = this.sonosApi.Sonos;
    const device = new Sonos(deviceIp);
    return device.pause();
}

module.exports = pause;
