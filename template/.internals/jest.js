require("@testing-library/jest-dom/extend-expect");

beforeEach(() => {
  jest.spyOn(window, "fetch").mockImplementation((...args) => {
    console.warn("window.fetch is not mocked for this call", ...args);
    throw new Error("This must be mocked!");
  });
});
