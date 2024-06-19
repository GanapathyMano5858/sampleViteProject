import { z } from "zod";

export interface FormValueType {
  values: {
    name: string;
    address: string;
    email: string;
    number: string;
    user_name: string;
    password: string;
    plan: string;
    yearly: boolean;
    addOn: string[];
  };
}

const form1Schema = z.object({
  firstname: z
    .string()
    .min(3, "Minimum 3 characters")
    .max(20, "Maximum 20 characters"),
  lastname: z
    .string()
    .min(3, "Minimum 3 characters")
    .max(20, "Maximum 20 characters"),
  // address: z
  //   .string()
  //   .min(10, "Minimum 10 characters")
  //   .max(100, "Maximum 100 characters"),
  mobilenumber: z
    .string()
    .min(10, "Should contain minimum 10 digits")
    .max(18, "Should not exceed 18 digits"),
  alternatemobilenumber: z
    .string()
    .min(10, "Should contain minimum 10 digits")
    .max(18, "Should not exceed 18 digits"),
  emailid: z
    .string()
    .email("Invalid email address")
    .min(10, "Minimum 10 characters")
    .max(100, "Maximum 100 characters"),
}).refine(data => data.mobilenumber !== data.alternatemobilenumber, {
  message: "Mobile number and alternate mobile number should not be the same",
  path: ["alternatemobilenumber"], // error path
});

const form2Schema = z.object({
  companyname: z
    .string()
    .min(2, "Minimun 2 characters")
    .max(14, "Maximum 100 characters"),
    

});

const form3Schema = z.object({
  plan: z.enum(["Arcade", "Advanced", "Pro"]),
  yearly: z.boolean(),
});

const form4Schema = z.object({
  addOn: z.string().array().optional(),
});

export const formValidationSchema = z.object({
  form1Schema,
  form2Schema,
  form3Schema,
  form4Schema,
});
