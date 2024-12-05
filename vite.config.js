import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/TrabalhoPortugues_DomCasmurro/', // Caminho do repositório no GitHub
  plugins: [react()],
});
