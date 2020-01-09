import rootSaga from '../Sagas/index'
import CreateStore from './CreateStore'
import { connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'

import { reducer as universityRedux } from './UniversityRedux'

export const history = createBrowserHistory()

export default initialState => {
    const reducers = {
        university: universityRedux
    }
    
    let rootReducer = {...reducers, router: connectRouter(history)}

    return CreateStore(rootReducer, rootSaga, initialState, history)
}