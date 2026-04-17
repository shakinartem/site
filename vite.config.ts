import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const githubPagesBase = '/site/';

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'serve' ? '/' : githubPagesBase,
}));
