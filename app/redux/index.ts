import { IStore } from "./models/IStore";
import { createStore, applyMiddleware } from "redux";
import reducers from "./stores/rootReducer";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import { MakeStore, createWrapper, Context, HYDRATE } from "next-redux-wrapper";

//---------------------------------------------
// const persistConfig = {
//   key: "user",
//   storage,
//   whiteList: ["user"],
// };

// const pReducer = persistReducer(persistConfig, reducers);
// const store = createStore(pReducer, applyMiddleware(thunk));

// const persistor = persistStore(store);

// export { persistor, store };

const makeStore: MakeStore<IStore> = (context: Context) =>
  createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

// export an assembled wrapper
export const wrapper = createWrapper<IStore>(makeStore, { debug: false });
