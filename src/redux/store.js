import { createStore , applyMiddleware} from "redux";
import { addTodo } from "./reducer/reducer";
import logger from "redux-logger";

export const store = createStore(addTodo, applyMiddleware(logger));
