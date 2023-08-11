import { type } from "os";
import z from "zod";

export const userSchema = z.object({
  name: z.string().max(45),
  email: z.string().email().max(45),
  password: z.string().max(45),
  phone_number: z.string(),
});

export const loginSchema = userSchema.omit({
    phone_number: true,
    name: true
})

export type UserData = z.infer<typeof userSchema>
export type LoginData = z.infer<typeof loginSchema>
