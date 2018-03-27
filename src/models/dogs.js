import { dispatch } from '@rematch/core';
import API from '../api';

export default {
  state: {
    image: null,
  },
  reducers: {
    setImage(_, image) {
      return { image };
    },
  },
  effects: {
    async fetch() {
      dispatch.app.toggleLoading(true);

      const { message } = await API.dogs.randomImage();

      this.setImage(message);

      dispatch.app.toggleLoading(false);
    },
  },
};
