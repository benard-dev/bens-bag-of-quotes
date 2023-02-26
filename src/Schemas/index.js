import * as yup from "yup"
export const addQuoteSchema = yup.object().shape({
    quote: yup.string().required("Sorry mate, this field is kinda required"),
    saidBy: yup.string().required("Sorry mate, this field is kinda required"),
    location: yup.string().min(5).required("Sorry mate, this field is kinda required"),
    date: yup.date().required("Sorry mate, this field is kinda required")
})