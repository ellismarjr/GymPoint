import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import createStore from './createStore';
import persistReducers from './persistReducers';

import rootReducer from './modules/RootReducer';
import rootSaga from './modules/RootSaga';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;
const sagaMiddlware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddlware];

const store = createStore(persistReducers(rootReducer), middlewares);
const persistor = persistStore(store);

sagaMiddlware.run(rootSaga);

export { store, persistor };
