import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const githubPagesBase = '/devpair-site/';

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'serve' ? '/' : githubPagesBase,
}));

