require("jest-emotion");
require("jest-dom/extend-expect");
require("@testing-library/react/cleanup-after-each");

class LocalStorage {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = value.toString();
  }

  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new LocalStorage();

beforeAll(() => {
  console.error = jest.fn();
});
