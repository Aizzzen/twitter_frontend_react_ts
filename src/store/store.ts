import {applyMiddleware, compose, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import {rootReducer} from "./rootReducer";
import rootSaga from "./sagas";
import {TweetsState} from "./ducks/tweets/contracts/state";
import {TagsState} from "./ducks/tags/contracts/state";
import {TweetState} from "./ducks/tweet/contracts/state";

const composeEnhancers =
    (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const sagaMiddleware = createSagaMiddleware()

export interface RootState {
    tweets: TweetsState;
    tags: TagsState;
    tweet: TweetState;
}

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)
