
/**
 * @private
 * @description Get Sonos speakers list from network.
 * @example
 * getDevices();
 */
function getDevices() {
    const DeviceDiscovery  = this.sonosApi.DeviceDiscovery;
    
    DeviceDiscovery({ timeout: 10000 }, (device) => {
        let ipAddress = device.host;
        console.log('found device at ' + ipAddress);
    });
    
    // TODO : use real data instead mock
    let devices = [{ip:'192.168.1.98'}, {ip:'192.168.1.99'}];
    
    // logger.info(`SonosService: Found ${devices.length} bridges`);
    console.info(`SonosService: Found ${devices.length} bridges`);
    
    return devices;
}

module.exports = {
    getDevices,
};
