import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import TestReactHookForm from '../testReactHookForm';

import * as actions from './actions';
import * as selectors from './selectors';

const Container = ({ handleLogin, initialValues, isLoading }) => {
    const onSubmit = (data) => handleLogin(data);

    return (
        <TestReactHookForm
            handleOnSubmit={onSubmit}
            initialValues={initialValues}
            isLoading={isLoading}
        />
    );
};

Container.propTypes = {
    handleLogin: PropTypes.func,
    initialValues: PropTypes.object,
    isLoading: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
    initialValues: selectors.getInitialValues,
    isLoading: selectors.getIsLoadingSession,
});

const mapDispatchToProps = (dispatch) => ({
    handleLogin: (data, onSuccessCallback) =>
        dispatch(actions.handleLogin(data, onSuccessCallback)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
