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
  companytype: z
    .string()
    .nonempty("Please select a company type"),
  address: z
    .string()
    .min(10, 'Minimun 10 characters')
    .max(100, 'Maximum 100 characters'),
    city: z
    .string()
    .nonempty("Please select a company type"),
    state: z
    .string()
    .nonempty("Please select a company type"),
    country: z
    .string()
    .nonempty("Please select a company type"),
  pincode: z
    .string()
    .min(6, "Pincode must be exactly 6 digits")
    .max(6, "Pincode must be exactly 6 digits")
    .regex(/^\d{6}$/, "Pincode must contain exactly 6 digits"),
});

const form3Schema = z.object({

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
