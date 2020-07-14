import { createStore, applyMiddleware } from "redux";
import reducers from "./stores/rootReducer";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "user",
  storage,
  whiteList: ["user"],
};
const pReducer = persistReducer(persistConfig, reducers);


const store = createStore(pReducer, applyMiddleware(thunk));
const persistor = persistStore(store);
export { persistor, store };
