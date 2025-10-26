import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/ponda-kannada-sangh/', // must match your repo name with trailing slash
  plugins: [react()],
});
