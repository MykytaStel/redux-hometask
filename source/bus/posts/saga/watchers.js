// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { types } from '../types';

// Workers
import { createPost, fetchPost } from './workers';

function* watchCreatePost () {
    yield takeEvery(types.CREATE_POST_ASYNC, createPost);
}
function* watchFetchPosts () {
    yield takeEvery(types.FETCH_POST_ASYNC, fetchPost);
}

export function* watchPosts () {
    yield all([call(watchCreatePost), call(watchFetchPosts)]);
}
