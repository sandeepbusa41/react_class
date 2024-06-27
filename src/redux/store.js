import { legacy_createStore } from "redux";
import { combainreducer } from "./combainreducer";


export const reduxstore=legacy_createStore(combainreducer)