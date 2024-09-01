import { withZodSchema } from "formik-validator-zod";
import z from "zod";

export const initialValues = {
  name: "",
  username: "",
  email: "",
  password: "",
  terms: false,
};

export const validationSchema = withZodSchema(
  z.object({
    name: z.string().min(2, "Name must be at least 2 characters long"),
    username: z.string().min(2, "Username must be at least 2 characters long"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    terms: z
      .boolean()
      .refine(
        (val) => val === true,
        "You must accept the terms and conditions"
      ),
  })
);
