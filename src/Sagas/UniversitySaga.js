import UniversityActions, {UniversityTypes} from '../Redux/UniversityRedux'
import {call, put, take, fork, cancel} from 'redux-saga/effects'
import {END} from 'redux-saga'

export function* fetchUniversity (api) {
    let action = yield take(UniversityTypes.UNIVERSITY_REQUEST)
    let task
    while (action !== END) {
      if (task) {
        yield cancel(task)
      }
      task = yield fork(fetchUniversityAPI, api, action)
      action = yield take(UniversityTypes.UNIVERSITY_REQUEST)
    }
  }
  
  export function* fetchUniversityAPI (api, {data}) {
    const res = yield call(api.getUniversity, data)
    if (!res.ok) {   

      yield put(UniversityActions.universityFailure('Terjadi kesalahan, ulangi beberapa saat lagi'))
    } else {
      if (!res.data.error) {        
        yield put(UniversityActions.universitySuccess(res.data))
      } else {
  
        yield put(UniversityActions.universityFailure('Terjadi kesalahan, ulangi beberapa saat lagi'))
      }
    }
  }

  export function* searchUniversity (api) {
    let action = yield take(UniversityTypes.SEARCH_REQUEST)
    while (action !== END) {
      yield fork(searchUniversityAPI, api, action)
      action = yield take(UniversityTypes.SEARCH_REQUEST)
    }
  }
  
  export function* searchUniversityAPI (api, {keyword}) {
    
    const res = yield call(api.getSearchUniversity, keyword)
    
    if (!res.ok) {   

      
      yield put(UniversityActions.searchFailure('Terjadi kesalahan, ulangi beberapa saat lagi'))
    } else {
      if (!res.data.error) {
        yield put(UniversityActions.searchSuccess(res.data))
      } else {
  
        yield put(UniversityActions.searchFailure('Terjadi kesalahan, ulangi beberapa saat lagi'))
      }
    }
  }