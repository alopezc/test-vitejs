import React from 'react';

import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import TextField from './components/TextField';
import useYupValidationResolver from './components/useYupValidationResolver';
import validationSchema from './validationSchema';

const TestReactHookForm = ({ handleOnSubmit, defaultValues, isLoading }) => {
    const { formState, handleSubmit, register } = useForm({
        defaultValues,
        resolver: useYupValidationResolver(validationSchema),
    });
    const { errors } = formState;
    const onSubmit = (data) => {
        if (handleOnSubmit) handleOnSubmit(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
                errors={errors}
                name="email"
                register={register}
                type="email"
            />
            <TextField
                name="password"
                register={register}
                errors={errors}
                type="password"
            />
            <Button type="submit" disabled={isLoading}>
                Submit
            </Button>
        </form>
    );
};

TestReactHookForm.propTypes = {
    defaultValues: PropTypes.object,
    handleOnSubmit: PropTypes.func,
    isLoading: PropTypes.bool,
};

export default TestReactHookForm;
