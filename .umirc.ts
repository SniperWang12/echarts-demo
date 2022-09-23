import { defineConfig } from 'umi';
import route from './config/route';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: route,
  fastRefresh: {},
  // mfsu: {},
  antd: {},
  hash: true,
  plugins: [],
  proxy: {
    '/geoserver': {
      target: 'http://10.0.207.157:8000/static/gz/lite/',
      changeOrigin: true,
    },
    '/static/gz/lite/': {
      target: 'http://10.0.207.157:8000',
      changeOrigin: true,
    },
  },
  publicPath: '/',
});
