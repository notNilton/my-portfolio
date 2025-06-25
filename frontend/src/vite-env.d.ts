/// <reference types="vite/client" />
// src/custom.d.ts

// for your PDF import
declare module '*.pdf';

// for Vite’s ?url imports (e.g. pdf.worker.js?url)
declare module '*.js?url';
