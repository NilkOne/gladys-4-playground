
const logger = require('../../../../utils/logger');


/**
 * @private
 * @description Get Sonos speakers list from network.
 * @example
 * getDevices();
 */
function getDevices() {
    if (!this.sonosApi) {
        throw new Error(`Sonos API not initialized`);
    }

    const DeviceDiscovery  = this.sonosApi.DeviceDiscovery;
    
    DeviceDiscovery({ timeout: 10000 }, (device) => {
        let ipAddress = device.host;
        logger.log('SonosService: Found device at ' + ipAddress);
    });
    
    // TODO : use real data instead mock
    let devices = [{ip:'192.168.1.98'}, {ip:'192.168.1.99'}];
    
    logger.info(`SonosService: Found ${devices.length} devices`);
    
    return devices;
}

module.exports = getDevices;
