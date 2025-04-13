// This script suppresses the punycode module deprecation warning
const originalProcessEmit = process.emit;
process.emit = function(event, warning) {
  // Skip DEP0040 warnings about punycode deprecation
  if (event === 'warning' && warning && warning.name === 'DeprecationWarning' && 
      warning.code === 'DEP0040' && warning.message.includes('punycode module is deprecated')) {
    return false;
  }
  return originalProcessEmit.apply(process, arguments);
};
