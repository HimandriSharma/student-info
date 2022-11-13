import { configureStore, applyMiddleware } from "redux";
import { componseWithDevtools } from "redux-devtools-extension";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";

const store = configureStore(
	rootReducer,
	componseWithDevtools(applyMiddleware(logger, thunk))
);

export default store;
