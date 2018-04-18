import { init } from '@rematch/core';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import models from './models';

export default function configureStore(initialState = {}, history) {
  const reducers = { router: routerReducer };
  const middlewares = [routerMiddleware(history)];

  const store = init({
    models,
    redux: {
      reducers,
      initialState,
      middlewares,
    }
  });

  if (module.hot) {
    module.hot.accept('./models', () => {
      Object.keys(models).forEach((modelKey) => {
        store.model({ name: modelKey, ...models[modelKey] });
      });
    });
  }

  return store;
}
