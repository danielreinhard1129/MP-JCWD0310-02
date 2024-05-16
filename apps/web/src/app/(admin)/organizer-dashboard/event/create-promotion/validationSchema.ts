import * as Yup from 'yup';
export const validationSchema = Yup.object().shape({
    code: Yup.string(),
    discount: Yup.string(),
    startDate: Yup.date(),
    endDate: Yup.date(),
    maxUses: Yup.number(),
});

export default validationSchema;