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
    .min(2, "Minimum 2 characters")
    .max(100, "Maximum 100 characters"),
  companytype: z
    .string()
    .nonempty("Please select a company type"),
  address: z
    .string()
    .min(10, 'Minimum 10 characters')
    .max(100, 'Maximum 100 characters'),
  city: z
    .string()
    .nonempty("Please select a city"),
  state: z
    .string()
    .nonempty("Please select a state"),
  country: z
    .string()
    .nonempty("Please select a country"),
  pincode: z
    .string()
    .min(6, "Pincode must be exactly 6 digits")
    .max(6, "Pincode must be exactly 6 digits")
    .regex(/^\d{6}$/, "Pincode must contain exactly 6 digits"),
});

const form3Schema = z.object({
  accountno: z
    .string()
    .regex(/^\d+$/, "Account number must contain only digits")
    .min(10, "Should contain minimum 10 digits")
    .max(18, "Should not exceed 18 digits"),
  beneficiaryname: z
    .string()
    .min(1, "Beneficiary name is required")
    .regex(/^[a-zA-Z\s]+$/, "Beneficiary name must contain only alphabetic characters and spaces")
    .max(100, "Beneficiary name should not exceed 100 characters"),
  ifsccode: z
    .string()
    .regex(/^[A-Z]{4}0[A-Z0-9]{6}$/, "Invalid IFSC code format")
    .min(11, "IFSC code must be 11 characters long")
    .max(11, "IFSC code must be 11 characters long"),
  filelist: z.array(z.instanceof(File)).min(1, 'Please upload your check').default([]),
});

const form4Schema = z.object({
  panno: z
    .string()
    .regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN format")
    .length(10, "PAN number must be 10 characters long"),
  pannoImage: z.any(),
  gstno: z
    .string()
    .regex(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/, "Invalid GST Number format")
    .length(15, "GST Number must be 15 characters long"),
  gstimage: z.any(),
  rcimage: z.any()
});

export const formValidationSchema = z.object({
  form1Schema,
  form2Schema,
  form3Schema,
  form4Schema,
});
