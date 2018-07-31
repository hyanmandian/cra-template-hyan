import { init } from '@rematch/core';

import models from './models';

export default function configureStore(initialState = {}) {
  const store = init({
    models,
    redux: { initialState },
  });

  if (module.hot) {
    module.hot.accept('./models', () => {
      Object.keys(models).forEach(modelKey => {
        store.model({ name: modelKey, ...models[modelKey] });
      });
    });
  }

  return {
    store,
    dispatch: store.dispatch,
  };
}
