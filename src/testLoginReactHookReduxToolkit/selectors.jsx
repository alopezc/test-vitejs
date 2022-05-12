import { createSelector } from 'reselect';

import { NAME } from './constants';

export const getModel = (state) => state[NAME];

export const getInitialValues = createSelector(
    getModel,
    (model) => model.initialValues
);

export const getSession = createSelector(getModel, (model) => model.session);

export const getIsLoadingSession = createSelector(
    getSession,
    (session) => session.isLoading
);

export const getErrorsLogin = createSelector(
    getSession,
    (session) => session.errors
);
