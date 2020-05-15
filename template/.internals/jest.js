require("@testing-library/jest-dom");

const locationRef = window.location;
delete window.location;
window.location = { ...locationRef };
window.MutationObserver = require("@sheerun/mutationobserver-shim");

beforeEach(() => {
  jest.restoreAllMocks();
  console.warn = jest.fn();
  console.error = jest.fn();
  window.location = { ...locationRef };
});
