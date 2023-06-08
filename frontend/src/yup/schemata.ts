import * as yup from "yup";

export const UserSchema = yup.object().shape({
username: yup
  .string()
  .min(5, "Username has to be at least 5 characters long")
  .required("Username is required"),
password: yup
  .string()
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^_~&*])(?=.{8,})/,
    "Password must contain at least 8 Characters, an uppercase letter, a lowercase letter, a number and a special character"
  )
  .required("Password is required"),
})

export const UserSignupSchema = UserSchema.shape({
  email: yup
    .string()
    .email("Incorrect email format")
    .required("Email is required"),
});
