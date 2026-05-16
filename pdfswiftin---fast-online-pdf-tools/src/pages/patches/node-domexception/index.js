// Native DOMException is available in Node.js 17+
// This local patch redirects to the native implementation to avoid the node-domexception deprecation warning.
module.exports = globalThis.DOMException || global.DOMException;

