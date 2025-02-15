import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import path from 'path';

// https://vite.dev/config/
const envFile = process.env.NODE_ENV === 'dsv' ? '.env.dsv' : '.env';
dotenv.config({ path: path.resolve(__dirname, envFile) });

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env
  }
});
