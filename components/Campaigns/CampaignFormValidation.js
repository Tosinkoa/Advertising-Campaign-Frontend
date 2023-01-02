import * as Yup from "yup"

export const validation = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be minimum of two characters")
    .max(40, "Name must be maximum of 40 characters"),
  from_date: Yup.date()
    .typeError((value) => `Invalid start date: ${value}`)
    .required("Please enter a start date"),
  to_date: Yup.date()
    .typeError((value) => `Invalid end date: ${value}`)
    .required("Please enter an end date"),
  daily_budget: Yup.number("Value must be a number")
    .positive("Number must be positive")
    .required("Daily budget is required")
    .min(1, "Mininum amount is $1")
    .max(100, "Max amount is $100"),
  total_budget: Yup.number("Value must be a number")
    .min(1, "Mininum amount is $1")
    .max(100, "Max amount is $100")
    .positive("Number must be positive")
    .required("Total budget is required"),
})
