// This script patches TypeScript project references warning
const originalConsoleWarn = console.warn;
console.warn = function(message) {
  // Suppress TypeScript project references warning
  if (typeof message === 'string' && message.includes('TypeScript project references are not fully supported')) {
    return;
  }
  // Pass through all other warnings
  originalConsoleWarn.apply(console, arguments);
};
