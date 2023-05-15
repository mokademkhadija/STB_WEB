import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  server: {
    url: "http://192.168.137.1:8100",
  },
  appId: 'io.ionic.starter',
  appName: 'AppMobileBanque',
  webDir: 'www',
  bundledWebRuntime: false
};

export default config;
