import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  federation({
    name: 'remote_app',
    filename: 'remoteEntry.js',
    exposes: {
      './Button': './src/components/Button',
      './Heading': './src/components/Heading'
    },
    dts: false,
    shared: {
      react: {
        singleton: true,
        requiredVersion: '^18.0.0'
      },
      'react-dom': {
        singleton: true,
        requiredVersion: '^18.0.0'
      }
    }

  })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
  // preview: {
  //   port: 4170,
  //   strictPort: true,
  //   cors: true
  // },
  server: {
    port: 5001,
    strictPort: true,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }

})
