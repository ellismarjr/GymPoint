import createSagaMiddleware from 'redux-saga';
import createStore from './createStore';

import rootReducer from './modules/RootReducer';
import rootSaga from './modules/RootSaga';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;
const sagaMiddlware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddlware];

const store = createStore(rootReducer, middlewares);

sagaMiddlware.run(rootSaga);

export default store;
