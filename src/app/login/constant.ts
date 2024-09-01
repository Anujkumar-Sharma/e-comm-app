import { withZodSchema } from "formik-validator-zod";
import z from "zod";

export const initialValues = { email: "", password: "", rememberMe: false };
export const validationSchema = withZodSchema(
  z.object({
    email: z.string().nonempty("Email address is required"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    rememberMe: z.boolean().optional(),
  })
);
