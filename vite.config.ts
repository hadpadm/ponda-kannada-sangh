

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/ponda-kannada-sangh/',  // <- use your repo name here
  plugins: [react()],
});

