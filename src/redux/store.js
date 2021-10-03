import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/userReducer';
import dataReducer from './reducers/dataReducer';
import UIReducer from './reducers/UIReducer';

//Redux Persist
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//State dasar /base pada redux (bentuknya object)
const initialState = {};

//kumpulan middleware
const middleware = [thunk];

// create rootReducer or combine reducer disini dimana setiap state disini menyimpan hasil dari reducer masing2
const reducers = combineReducers({
    user: userReducer, // semua hasil dari userReducer akan disimpan kedlam state user
    data: dataReducer,
    UI: UIReducer
});


// store and combine with redux persist
//(NOTED: matikan or comment bagian yang terhubung dengan redux persist jika tidak mau menggunakan redux persisit)

const persistConfig = { // persistConfig bagian dari redux persist
    key: "root",
    storage
};

const persistedReducer = persistReducer(persistConfig, reducers); //bagian redux persist

const store = createStore(
    persistedReducer, // Bagian redux persist
    initialState,
    compose( // compose berfungsi untuk menerapkan middleware kedalam store dan extension redux_devtool
        applyMiddleware(...middleware), 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

const persistor = persistStore(store); // bagian redux persist


// export { persistor, store }
export default store
