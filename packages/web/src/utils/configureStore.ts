import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from '../middlewares';
import rootReducer from '../state';

export default function configureStore() {
  const epicMiddleware = createEpicMiddleware();
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(epicMiddleware)));

  epicMiddleware.run(rootEpic);

  return store;
}
