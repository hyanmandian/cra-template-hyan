import { init } from '@rematch/core';
import { routerReducer, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory';
import models from './models';

export const history = createHistory();

export default (initialState = {}) => {
  const reducers = {
    router: routerReducer,
  };

  const middlewares = [
    routerMiddleware(history),
  ];

  return init({
    models,
    redux: {
      initialState,
      reducers,
      middlewares,
    },
  });
};

