import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";

const reducer=combineReducers({

})

const middleware=[thunk]

const store = createStore(reducer,applyMiddleware(...middleware))

export default store