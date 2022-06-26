import {legacy_createStore as createStore } from 'redux'
import reducer from './reducer'

export default createStore(reducer)
