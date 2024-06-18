import { z } from 'zod';

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
  name: z
    .string()
    .min(3, 'Minimum 3 characters')
    .max(20, 'Maximum 20 characters'),
  address: z
    .string()
    .min(10, 'Minimun 10 characters')
    .max(100, 'Maximum 100 characters'),
  number: z
    .string()
    .min(10, 'Should contain minimum 10 digits')
    .max(18, 'Should not exceed 18 digits'),
});

const form2Schema = z.object({
  email: z
    .string()
    .email()
    .refine((val) => val.endsWith('@gmail.com'), 'Should end with @gmail.com'),
  user_name: z
    .string()
    .min(5, 'Minimun 5 characters')
    .max(14, 'Maximum 14 characters'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .max(20, 'Password length should not exceed 20 characters')
    .regex(/\d/, 'Password must contain at least 1 number'),
});

const form3Schema = z.object({
  plan: z.enum(['Arcade', 'Advanced', 'Pro']),
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
