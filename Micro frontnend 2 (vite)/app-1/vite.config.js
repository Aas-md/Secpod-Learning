import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  federation({
    name: 'host_app',
    remotes: {
      // remote_app: 'http://localhost:5001/remoteEntry.js',
      remote_app: {
        entry: 'http://localhost:5001/remoteEntry.js',
        type: 'module', // 🚀 Instructs the browser to process imports correctly
        name: 'remote_app'
      },
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
  server: {
    port: 5000,
    strictPort: true
  }

})
