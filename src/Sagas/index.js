import { fork, all } from 'redux-saga/effects'
import API from '../Services/Api'

import { fetchUniversity, searchUniversity } from './UniversitySaga'

const api = API.create()

function * clientSagas () {
    yield all([
        fork(fetchUniversity, api),
        fork(searchUniversity, api)
    ])
  }

  export default function * rootSaga () {
    yield all([fork(clientSagas)])
  }