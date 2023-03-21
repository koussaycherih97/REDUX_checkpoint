import { createStore } from "redux";
import Reducers from "./Reducers";
import {combineReducers} from 'redux'




export default createStore(combineReducers({Reducers}))