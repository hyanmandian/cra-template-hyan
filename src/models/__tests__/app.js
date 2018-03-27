import { init, dispatch } from '@rematch/core';
import app from '../app';

const setup = () => ({
  store: init({
    models: { app },
  }),
});

describe('App model', () => {
  test('Default state', () => {
    const { store } = setup();

    expect(store.getState().app).toEqual({
      loading: false,
    });
  });

  describe('Toggle loading', () => {
    test('True', () => {
      const { store } = setup();

      dispatch.app.toggleLoading(true);

      expect(store.getState().app.loading).toBe(true);
    });

    test('False', () => {
      const { store } = setup();

      dispatch.app.toggleLoading(false);

      expect(store.getState().app.loading).toBe(false);
    });

    test('Toggle', () => {
      const { store } = setup();

      dispatch.app.toggleLoading();
      expect(store.getState().app.loading).toBe(true);
      dispatch.app.toggleLoading();
      expect(store.getState().app.loading).toBe(false);
    });
  });
});
