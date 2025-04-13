// This script patches the contentlayer warning message for Windows
const originalConsoleWarn = console.warn;
console.warn = function(message) {
  // Suppress the specific ContentLayer warning about Windows
  if (typeof message === 'string' && message.includes('Contentlayer might not work as expected on Windows')) {
    return;
  }
  // Pass through all other warnings
  originalConsoleWarn.apply(console, arguments);
};
