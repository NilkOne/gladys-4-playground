const actions = store => ({
  async getDevices(state) {
    // store.setState({
    //   sonosGetDevicesStatus: SonosGetDevicesStatus.Getting
    // });
    try {
      const devices = await state.httpClient.get('/api/v1/service/sonos/devices');
      // store.setState({
      //   devices,
      //   sonosGetDevicesStatus: SonosGetDevicesStatus.Success
      // });
    } catch (e) {
      // store.setState({
      //   sonosGetDevicesStatus: SonosGetDevicesStatus.Error,
      //   sonosGetDevicesError: e.message
      // });
    }
  }
});

export default actions;
