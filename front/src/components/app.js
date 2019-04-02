import { h } from 'preact';
import { Router, getCurrentUrl } from 'preact-router';
import createStore from 'unistore';
import { Provider, connect } from 'unistore/preact';
import { IntlProvider } from 'preact-i18n';
import { HttpClient } from '../utils/HttpClient';
import { DemoHttpClient } from '../utils/DemoHttpClient';
import translationEn from '../config/i18n/en.json';

import Header from './header';
import Layout from './layout';
import Login from '../routes/login/LoginPage';
import Dashboard from '../routes/dashboard/DashboardPage';
import Device from '../routes/device';
import IntegrationPage from '../routes/integration';
import ChatPage from '../routes/chat';
import MapPage from '../routes/map';
import CalendarPage from '../routes/calendar';
import ScenePage from '../routes/scene';
import EditScenePage from '../routes/scene/edit-scene';
import TriggerPage from '../routes/trigger';
import ProfilePage from '../routes/profile';
import SettingsSessionPage from '../routes/settings/settings-session';
import SettingsHousePage from '../routes/settings/settings-house';
import SettingsAdvancedPage from '../routes/settings/settings-advanced';
import SettingsSystemPage from '../routes/settings/settings-system';

// Integrations
import TelegramPage from '../routes/integration/all/telegram';
import PhilipsHuePage from '../routes/integration/all/philips-hue';

const httpClient = (process.env.DEMO_MODE === 'true') ? new DemoHttpClient() : new HttpClient();
httpClient.setToken('XX', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiOTJiZjk0NDEtYzljMC00YTVmLWI3YmItNGY3NmYwZWM0Yzk1Iiwic2NvcGUiOlsiZGFzaGJvYXJkOndyaXRlIiwiZGFzaGJvYXJkOnJlYWQiXSwic2Vzc2lvbl9pZCI6IjZhOTYyNzk2LTZlMGQtNDRiNC04Y2Y2LWRkMmJhYjhjY2M0ZiIsImlhdCI6MTU1MTA2NzM5MywiZXhwIjoxNTUxMTUzNzkzLCJhdWQiOiJ1c2VyIiwiaXNzIjoiZ2xhZHlzIn0.JfiRsTn4cyARIMElD5DgyFt7xKHPcTNnaMLKznbfVc4');

const store = createStore({
  httpClient,
  currentUrl: getCurrentUrl(),
  user: {
    language: 'en'
  },
  showDropDown: false
});

const actions = store => ({
  handleRoute(state, e) {
    store.setState({ currentUrl: e.url, showDropDown: false });
  },
  toggleDropDown(state) {
    store.setState({ showDropDown: !state.showDropDown });
  }
});

const Main = connect('currentUrl,user,showDropDown', actions)(
  ({ currentUrl, user, showDropDown, handleRoute, toggleDropDown }) => (
    <div id="app">
      <Layout main={currentUrl !== '/login'}>
        <Header currentUrl={currentUrl} user={user} toggleDropDown={toggleDropDown} showDropDown={showDropDown} />
        <Router onChange={handleRoute}>
          <Login path="/login" />
          <Dashboard path="/dashboard" />
          <Device path="/dashboard/device" />
          <IntegrationPage path="/dashboard/integration" />
          <IntegrationPage path="/dashboard/integration/device" />
          <IntegrationPage path="/dashboard/integration/communication" />
          <IntegrationPage path="/dashboard/integration/calendar" />
          <IntegrationPage path="/dashboard/integration/music" />
          <IntegrationPage path="/dashboard/integration/health" />
          <IntegrationPage path="/dashboard/integration/weather" />
          <IntegrationPage path="/dashboard/integration/navigation" />

          <TelegramPage path="/dashboard/integration/communication/telegram" />
          <PhilipsHuePage path="/dashboard/integration/device/philips-hue" />

          <ChatPage path="/dashboard/chat" />
          <MapPage path="/dashboard/maps" />
          <CalendarPage path="/dashboard/calendar" />
          <ScenePage path="/dashboard/scene" />
          <EditScenePage path="/dashboard/scene/:scene_id" />
          <TriggerPage path="/dashboard/trigger" />

          <ProfilePage path="/dashboard/profile" />
          <SettingsSessionPage path="/dashboard/settings/session" />
          <SettingsHousePage path="/dashboard/settings/house" />
          <SettingsAdvancedPage path="/dashboard/settings/advanced" />
          <SettingsSystemPage path="/dashboard/settings/system" />
        </Router>
      </Layout>
    </div>
  )
);

const App = () => (
  <Provider store={store}>
    <IntlProvider definition={translationEn}>
      <Main />
    </IntlProvider>
  </Provider>
);

export default App;
