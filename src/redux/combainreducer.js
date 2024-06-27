import { combineReducers, legacy_createStore } from "redux";
import { reducerfunction } from "./books/reducer";
import { reduxreducer } from "./profile/reducer";

export const combainreducer=combineReducers({

    profile:reduxreducer,
    books:reducerfunction,

})


