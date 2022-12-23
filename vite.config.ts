import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')
  return {
    // vite config
    define: {
      'process.env.GOOGLE_CLIENT': `'${env.GOOGLE_CLIENT}'`,
      'process.env.REACT_APP_API': `'${env.REACT_APP_API}'`
    },
    server: {
      port : env.PORT as unknown as number 
    },
    plugins: [react()]
  }
})