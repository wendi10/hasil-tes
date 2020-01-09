// @flow
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  universityRequest: ['data'],
  universitySuccess: ['payload'],
  universityFailure: ['err'],
  searchRequest: ['keyword'],
  searchSuccess: ['payload'],
  searchFailure: ['err']
})

export const UniversityTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: false,
  university: null,
  success: false,
  err: null,
  searchResult: null,
  fetchingSearch: false
})

/* ------------- Reducers ------------- */
// we're attempting to fetch

// Request
export const universityRequest = (state) => state.merge({fetching: true,success: false})
  // for get data if want to use submit button
export const searchRequest = (state) =>state.merge({fetching: true, success: false})

// Success
export const universitySuccess = (state, { payload }) =>
  state.merge({
    fetching: false,
    university: {payload},
    err: null,
    success: true
  })

export const searchSuccess = (state, { payload }) =>
  state.merge({
    fetching: false,
    searchResult: payload,
    err: null,
    success: true
  })

// Failure
export const universityFailure = (state, { err }) => state.merge({ fetching: false, err })  
export const searchFailure = (state, { err }) => state.merge({ fetching: false, err })

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.UNIVERSITY_REQUEST]: universityRequest,
  [Types.UNIVERSITY_SUCCESS]: universitySuccess,
  [Types.UNIVERSITY_FAILURE]: universityFailure,
  [Types.SEARCH_REQUEST]: searchRequest,
  [Types.SEARCH_SUCCESS]: searchSuccess,
  [Types.SEARCH_FAILURE]: searchFailure
})
