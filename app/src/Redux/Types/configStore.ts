import { applyMiddleware, combineReducers , createStore } from "redux";
import thunk, { ThunkDispatch } from 'redux-thunk';
import {BannerReducer} from '../Reducer/BannerReducer';

// export type TDispatch = ThunkDispatch<TAppState, void, AnyAction>;

const rootReducer = combineReducers({
    // đây là reducer của ứng dụng
    BannerReducer,

});

export const store = createStore(rootReducer, applyMiddleware(thunk));
 //  export type dinh nghia cho state dung ben Banner.tsx

export type rootReducer = ReturnType<typeof rootReducer>;

