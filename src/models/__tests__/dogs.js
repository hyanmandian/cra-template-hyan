import { init, dispatch } from '@rematch/core';
import API from '../../api';
import app from '../app';
import dogs from '../dogs';

const setup = () => ({
  store: init({
    models: {
      app,
      dogs,
    },
  }),
});

describe('Dogs model', () => {
  test('Default state', async () => {
    const { store } = setup();

    expect(store.getState().dogs).toEqual({
      image: null,
    });
  });

  test('Fetch', async () => {
    const { store } = setup();

    API.dogs.randomImage = () => new Promise((resolve) => {
      resolve({ message: 'https://dog.ceo/api/img/bouvier/n02106382_834.jpg' });
    });

    await dispatch.dogs.fetch();

    expect(store.getState().dogs.image).not.toBe(null);
  });
});
