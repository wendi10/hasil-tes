import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'
import Immutable from 'seamless-immutable'

const sagaMiddleware = createSagaMiddleware()

export default (rootReducer, rootSaga, initialState, history) => {
    let middlewares = [sagaMiddleware, routerMiddleware(history)]
    const store = createStore(combineReducers(rootReducer), Immutable(initialState), applyMiddleware(...middlewares))

    sagaMiddleware.run(rootSaga)

    return store
}