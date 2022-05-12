import React from 'react';

import { Container } from '@mui/material';

import TestLoginReactHookReduxToolkit from './testLoginReactHookReduxToolkit/Container';
import TestReactHookForm from './testReactHookForm/index';
import TestReduxTookit from './testReduxTookit/index';

const App = () => (
    <Container>
        <TestReactHookForm />
        <TestReduxTookit />
        <TestLoginReactHookReduxToolkit />
    </Container>
);

export default App;
