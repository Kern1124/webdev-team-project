import * as yup from "yup";

export const UserSignupSchema = yup.object({
  username: yup
    .string()
    .min(5, "Username has to be at least 5 characters long")
    .required("Username is required"),
  email: yup
    .string()
    .email("Incorrect email format")
    .required("Email is required"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      "Password must contain at least 8 Characters, an uppercase letter, a lowercase letter, a number and a special character"
    )
    .required("Password is required"),
});
