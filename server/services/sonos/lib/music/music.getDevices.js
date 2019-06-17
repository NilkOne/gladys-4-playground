const logger = require('../../../../utils/logger');
const events = require('events');

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
    logger.info('SonosService.getDevices');

    const DeviceDiscovery = this.sonosApi.DeviceDiscovery;
    
    // TODO : use real data instead mock
    // const devices = [{name:'Living Room', ip:'192.168.1.98'}, {name:'Bath Room', ip:'192.168.1.99'}];
    let devices = [];

    const addDevice = function addDevice(device) {
        logger.log('SonosService: Found device at {0}:{1}', device.host, device.port);
        devices.push({name:device.port, ip:device.host});
    }

    const returnDevices = function returnDevices() {
        logger.info(`SonosService: Found ${devices.length} devices`);
        return devices;
    }

    const eventEmitter = new events.EventEmitter();
    eventEmitter.on('DeviceAvailable', addDevice);
    eventEmitter.on('timeout', returnDevices);

    DeviceDiscovery({ timeout: 10000 }, addDevice);

    return devices;
}

module.exports = getDevices;
