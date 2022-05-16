import React from 'react';

import { TextField } from '@mui/material';
import PropTypes from 'prop-types';

const _TextField = ({ errors, name, register, ...rest }) => (
    <TextField
        {...register(name)}
        {...rest}
        error={errors[name] && Boolean(errors[name]?.message)}
        helperText={errors[name]?.message}
        size="small"
        variant="outlined"
    />
);

_TextField.propTypes = {
    errors: PropTypes.object,
    name: PropTypes.string,
    register: PropTypes.func,
};

export default _TextField;
