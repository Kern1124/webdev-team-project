import { object, string } from 'yup';

export const userLoginSchema = object({
username: 
  string()
  .min(5, "Username has to be at least 5 characters long")
  .required("Username is required"),
password: 
  string()
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^_~&*])(?=.{8,})/,
  )
  .required("Password is required"),
})

export const userRegistrationSchema = userLoginSchema.shape({
  email: 
    string()
    .email("Incorrect email format")
    .required("Email is required"),
});