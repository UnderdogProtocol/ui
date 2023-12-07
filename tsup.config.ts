import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/components/Button/index.tsx'],
  outDir: 'dist',
  splitting: false, 
  sourcemap: true, 
  clean: true, 
  format: ['cjs', 'esm'], 
  dts: true, 
  legacyOutput: true,
});