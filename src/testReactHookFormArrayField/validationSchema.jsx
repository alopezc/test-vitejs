import { array, date, number, object } from 'yup';

export default () => {
    return object().shape({
        periods: array().of(
            object().shape({
                baseConsumption: number()
                    .typeError('must be a number')
                    .min(0, 'must be greater than zero'),
                finalDate: date().max(new Date()),
                initialDate: date().max(new Date()),
                intermadiateConsumption: number()
                    .typeError('must be a number')
                    .min(0, 'must be greater than zero'),
                peakConsumption: number()
                    .typeError('must be a number')
                    .min(0, 'must be greater than zero'),
            })
        ),
    });
};
