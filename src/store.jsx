import { configureStore } from '@reduxjs/toolkit';

import testLoginReactHookReduxToolkit from './testLoginReactHookReduxToolkit';
import counterReducer from './testReduxTookit/counterSlice';

export const store = configureStore({
    reducer: {
        [testLoginReactHookReduxToolkit.NAME]:
            testLoginReactHookReduxToolkit.reducer,
        counter: counterReducer,
    },
});
