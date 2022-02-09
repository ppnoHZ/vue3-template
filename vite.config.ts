import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default ({ command }) => {
  return defineConfig({
    plugins: [vue(), viteMockServe({
      localEnabled: true,
      prodEnabled: false,
      injectCode:`
        console.log('xxxxx')
      `
    })]
  })
}

