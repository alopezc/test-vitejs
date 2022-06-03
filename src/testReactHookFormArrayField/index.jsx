import React, { useEffect, useState } from 'react';

import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import { useForm, useFieldArray } from 'react-hook-form';

import TextField from './components/TextField';
import useYupValidationResolver from './components/useYupValidationResolver';
import validationSchema from './validationSchema';

const TestReactHookForm = ({ handleOnSubmit, defaultValues, isLoading }) => {
    const { control, formState, handleSubmit, register, watch } = useForm({
        defaultValues,
        resolver: useYupValidationResolver(validationSchema),
    });
    const { errors } = formState;
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'periods',
    });
    const [periods, setPeriods] = useState(watch('periods'));

    const handleChangePeriods = () => setPeriods(periods === 6 ? 12 : 6);

    const onSubmit = (data) => {
        console.log({ data });
        if (handleOnSubmit) handleOnSubmit(data);
    };

    useEffect(() => {
        setPeriods(6);
    }, []);

    useEffect(() => {
        const currentProp = parseInt(periods);
        const previousProp = fields.length;
        if (currentProp > previousProp) {
            for (let i = previousProp; i < currentProp; i++) {
                append({
                    baseConsumption: null,
                    finalDate: new Date().toLocaleDateString(),
                    initialDate: new Date(),
                    intermadiateConsumption: null,
                    peakConsumption: null,
                });
            }
        } else {
            for (let i = previousProp; i > currentProp; i--) {
                remove(i - 1);
            }
        }
    }, [periods]);

    return (
        <>
            <Button onClick={() => handleChangePeriods()}>
                Toggle Periods
            </Button>
            <form onSubmit={handleSubmit(onSubmit)}>
                {fields.map((_, i) => {
                    return (
                        <div key={i} className="mt-3 mb-2">
                            <div>
                                <strong className="text-primary">
                                    Periodo {i + 1}
                                </strong>
                            </div>

                            <TextField
                                errors={errors}
                                name={`periods[${i}].initialDate`}
                                register={register}
                                type="date"
                                step="2"
                            />

                            <TextField
                                errors={errors}
                                name={`periods[${i}].finalDate`}
                                register={register}
                                type="date"
                            />

                            <TextField
                                errors={errors}
                                min={0}
                                name={`periods[${i}].baseConsumption`}
                                label="Base (kWh)"
                                register={register}
                                type="number"
                            />

                            <TextField
                                errors={errors}
                                name={`periods[${i}].intermadiateConsumption`}
                                label="Intermediate (kWh)"
                                register={register}
                                type="text"
                            />

                            <TextField
                                errors={errors}
                                name={`periods[${i}].peakConsumption`}
                                label="Peak (kWh)"
                                register={register}
                                type="number"
                            />

                            <TextField
                                errors={errors}
                                name={`periods[${i}].totalConsumption`}
                                label="Total (kWh)"
                                register={register}
                                type="number"
                            />

                            <TextField
                                errors={errors}
                                name={`periods[${i}].baseDemand`}
                                label="Base (kW)"
                                register={register}
                                type="number"
                            />

                            <TextField
                                errors={errors}
                                name={`periods[${i}].intermadiateDemand`}
                                label="Itermediate (kW)"
                                register={register}
                                type="number"
                            />

                            <TextField
                                errors={errors}
                                name={`periods[${i}].peakDemand`}
                                label="Peak (kW)"
                                register={register}
                                type="number"
                            />
                        </div>
                    );
                })}
                <Button type="submit" disabled={isLoading}>
                    Submit
                </Button>
            </form>
        </>
    );
};

TestReactHookForm.propTypes = {
    defaultValues: PropTypes.object,
    handleOnSubmit: PropTypes.func,
    isLoading: PropTypes.bool,
};

export default TestReactHookForm;
