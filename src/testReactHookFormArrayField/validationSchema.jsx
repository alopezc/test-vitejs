import { array, number, object, string } from 'yup';

export default () =>
    object().shape({
        periods: array().of(
            object().shape({
                baseConsumption: number()
                    .typeError('must be a number')
                    .min(0, 'must be greater than zero')
                    .nullable(),
                finalDate: string().required('Value is mendatory'),
                initialDate: string().required('Value is mendatory'),
                intermadiateConsumption: number()
                    .typeError('must be a number')
                    .min(0, 'must be greater than zero')
                    .nullable(),
                peakConsumption: number()
                    .typeError('must be a number')
                    .min(0, 'must be greater than zero')
                    .nullable(),
            })
        ),
    });
