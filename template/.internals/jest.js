require("@testing-library/jest-dom");

const envRef = { ...process.env };
delete process.env;
process.env = { ...envRef };

const locationRef = { ...window.location };
delete window.location;
window.location = { ...locationRef };

window.MutationObserver = require("@sheerun/mutationobserver-shim");

beforeEach(() => {
  jest.restoreAllMocks();
  process.env = { ...envRef };
  console.warn = jest.fn();
  console.error = jest.fn();
  window.location = { ...locationRef };
});

