
/**
 * @private
 * @description Pause the speaker.
 * @param {Object} deviceIp - The IP address of the speaker we wants to control.
 * @returns {Promise} Promise.
 * @example
 * pause(deviceIp);
 */
function pause(deviceIp) {
    if (!this.sonosApi) {
        throw new Error(`Sonos API not initialized`);
    }

    const Sonos = this.sonosApi.Sonos;
    const device = new Sonos(deviceIp);
    return device.pause();
}

module.exports = pause;
